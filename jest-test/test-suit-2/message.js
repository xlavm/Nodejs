function message(data){
  try {
    let plainText = data + ' luis tested';
    return plainText;
  } catch (e) {
    return '';
  }
};

module.exports = message;
