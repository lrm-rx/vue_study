import CryptoJS from "crypto-js";

/**
 * 加密工具类
 */
class CryptoUtils {
  /**
   * 加密文本
   * @param {string} plaintext - 要加密的文本
   * @param {string} key - 加密密钥
   * @param {Object} options - 配置选项
   * @returns {string} 加密后的字符串（格式：iv:ciphertext）
   */
  static encrypt(plaintext, key, options = {}) {
    const {
      iv = CryptoJS.lib.WordArray.random(16),
      mode = CryptoJS.mode.CBC,
      padding = CryptoJS.pad.Pkcs7,
      outputFormat = CryptoJS.enc.Hex,
    } = options;

    // 处理密钥
    const processedKey = CryptoJS.SHA256(key);

    // 加密
    const encrypted = CryptoJS.AES.encrypt(plaintext, processedKey, {
      iv: iv,
      mode: mode,
      padding: padding,
    });

    // 返回标准格式：IV:密文
    return `${iv.toString(CryptoJS.enc.Hex)}:${encrypted.ciphertext.toString(
      outputFormat
    )}`;
  }

  /**
   * 解密文本
   * @param {string} ciphertext - 加密文本（格式：iv:ciphertext）
   * @param {string} key - 解密密钥
   * @param {Object} options - 配置选项
   * @returns {string} 解密后的原始文本
   */
  static decrypt(ciphertext, key, options = {}) {
    const {
      mode = CryptoJS.mode.CBC,
      padding = CryptoJS.pad.Pkcs7,
      inputFormat = CryptoJS.enc.Hex,
    } = options;

    // 解析IV和密文
    const [ivHex, ciphertextHex] = ciphertext.split(":");

    if (!ivHex || !ciphertextHex) {
      throw new Error('Invalid ciphertext format. Expected "iv:ciphertext"');
    }

    const iv = CryptoJS.enc.Hex.parse(ivHex);
    const encrypted = CryptoJS.enc.Hex.parse(ciphertextHex);

    // 处理密钥
    const processedKey = CryptoJS.SHA256(key);

    // 解密
    const decrypted = CryptoJS.AES.decrypt(
      { ciphertext: encrypted },
      processedKey,
      { iv, mode, padding }
    );

    // 返回UTF-8字符串
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  /**
   * 生成随机密钥
   * @param {number} length - 密钥长度（字节）
   * @returns {string} 随机密钥
   */
  static generateKey(length = 32) {
    return CryptoJS.lib.WordArray.random(length).toString(CryptoJS.enc.Hex);
  }

  /**
   * 验证加密文本格式
   * @param {string} ciphertext - 加密文本
   * @returns {boolean} 是否为有效格式
   */
  static isValidCiphertext(ciphertext) {
    if (typeof ciphertext !== "string") return false;
    const parts = ciphertext.split(":");
    return (
      parts.length === 2 &&
      /^[0-9a-fA-F]{32}$/.test(parts[0]) && // IV 应该是32个十六进制字符
      parts[1].length > 0
    );
  }
}

// 导出独立的函数
export const encrypt = CryptoUtils.encrypt;
export const decrypt = CryptoUtils.decrypt;
export const generateKey = CryptoUtils.generateKey;
export const isValidCiphertext = CryptoUtils.isValidCiphertext;
