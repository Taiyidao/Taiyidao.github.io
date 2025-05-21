function showImage() {
    Swal.fire({
      text: "扫描二维码联系",
      imageUrl: "/img/code.png",
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: "扫描二维码添加微信",
      showConfirmButton: false
    });
  }