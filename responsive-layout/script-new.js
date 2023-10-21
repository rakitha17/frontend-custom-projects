const navigation = document.querySelector('.navs');

function openMenuFunction() {
  console.log('clicked');
  if(navigation.className === 'navs') {
    navigation.className += ' openMenu'
  }else {
    navigation.className = 'navs';
  }
}