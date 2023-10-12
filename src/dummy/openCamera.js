// const handleOpenCameraPhoto = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.CAMERA,
//       {
//         title: 'App Camera Permission',
//         message: 'App Needs Camera Access',
//         buttonPositive: 'Ok',
//         buttonNegative: 'Cancel',
//         buttonNeutral: 'ask me later',
//       },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log('access camera success');
//       cameraLaunch();
//     } else {
//       console.log('access camera failed');
//       console.log(PermissionsAndroid.RESULTS.GRANTED);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

const cameraLaunch = () => {
  const options = {
    // storageOptions: {
    //   skipBackup: true,
    //   path: '.',
    //   saveToPhotos: true,
    // },
    saveToPhotos: true,
    mediaType: 'mixed',
    includeBase64: false,
  };

  ImagePicker.launchCamera(options, response => {
    response.didCancel && console.log('User cancelled');
    response.error && console.log('ImagePicker Error: ', response.error);
    console.log(response);
  });
};
