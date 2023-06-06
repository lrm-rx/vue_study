<template>
  <div>
    <el-row>
      <!--canvas截取流-->
      <canvas ref="canvas" width="200" height="200"></canvas>
      <!--图片展示-->
      <video ref="video" width="200" height="200" autoplay></video>
    </el-row>
    <el-row>
      <!--开启摄像头-->
      <el-button type="primary" @click="callCamera" style="margin-right: 10px"
        >开启摄像头</el-button
      >
      <!--关闭摄像头-->
      <el-button type="primary" @click="closeCamera">关闭摄像头</el-button>
      <!--确认-->
      <el-button type="primary" @click="photograph">拍照</el-button>
    </el-row>
  </div>
</template>

<script>
import { dataURLtoBlob } from './utils/dataURLtoBlob'
export default {
  name: "App",
  methods: {
    // 调用摄像头
    callCamera() {
      // H5调用电脑摄像头API
      navigator.mediaDevices
        .getUserMedia({
          video: true,
        })
        .then((success) => {
          // 摄像头开启成功
          this.$refs["video"].srcObject = success;
          // 实时拍照效果
          this.$refs["video"].play();
        })
        .catch((error) => {
          console.error("摄像头开启失败，请检查摄像头是否可用！", error);
        });
    },
    // 拍照
    photograph() {
      let ctx = this.$refs["canvas"].getContext("2d");
      // 把当前视频帧内容渲染到canvas上
      ctx.drawImage(this.$refs["video"], 0, 0, 200, 200);
      let imgData  = this.$refs["canvas"].toDataURL({format: 'png', quality:1, width:20000, height:4000});
      let link = document.createElement("a");
      let blob = dataURLtoBlob(imgData);
      let objurl = URL.createObjectURL(blob);
      link.download = `${new Date().getTime()}-photo.png`;
      link.href = objurl;
      link.click();
    },
    // 关闭摄像头
    closeCamera() {
      if (!this.$refs["video"].srcObject) return;
      let stream = this.$refs["video"].srcObject;
      let tracks = stream.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
      this.$refs["video"].srcObject = null;
    },
  },
};
</script>
