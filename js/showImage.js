function showImage() {
    swal({
      title: "二维码",
      text: "扫描二维码联系",
      imageUrl: "http://localhost:4000/img/code.png",
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: "扫描二维码添加微信",
      showConfirmButton: false
    });
  }