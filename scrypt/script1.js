let dark = localStorage.getItem("darkMode")
const darkMode = document.querySelector(".darkMode")
const enableDarkmode = () => {
    document.body.classList.add('dark')
    localStorage.setItem('dark', 'enabled')
}
const disenableDarkmode = () => {
    document.body.classList.remove('dark')
    localStorage.setItem('dark', null)
}
darkMode.addEventListener("click", function() {
    dark = localStorage.getItem('dark');
    if (dark !== 'enabled') {
        enableDarkmode();
        document.querySelector('.box').style.background = '#808080';
        document.querySelector('.box').style.borderColor = 'black';
        document.querySelector('.logo').style.color = 'white';
        document.querySelector('.welcome').style.color = 'black';
        document.querySelector('.lorem').style.color = '#006400';
        document.querySelector('.account').style.color = '#006400';
        document.querySelector('.Sign').style.color = '#black';
        document.querySelector('.sign').style.color = '#006400';

        document.querySelector('.boxofgoogle').style.background = '#E9F1FF';
        document.querySelector('.boxofgoogle').style.borderColor = 'white';
        document.querySelector('.googletext').style.color = '#4285F4';

        document.querySelector('.boxoffacebook').style.background = 'white';
        document.querySelector('.boxoffacebook').style.borderColor = 'white';

        document.querySelector('.boxofapple').style.background = 'white';
        document.querySelector('.boxofapple').style.borderColor = 'white';

        document.querySelector('.box-1').style.background = 'white';
        document.querySelector('.box-1').style.borderColor = 'white';
        document.querySelector('.boxaddress').style.color = '#808080';
        document.querySelector('.address').style.color = 'black';
        document.querySelector('.password').style.color = 'black';

        document.querySelector('.box-2').style.background = 'white';
        document.querySelector('.box-2').style.borderColor = 'white';
        document.querySelector('.boxpassword').style.color = '#808080';
        
        document.querySelector('.forgot').style.color = '#E9F1FF';
        document.querySelector('.boxsign').style.background = '#00008B';
        document.querySelector('.boxsign').style.borderColor = 'white';
        document.querySelector('.Signin').style.color = 'white';

        let img = document.querySelector('.back');
        img.setAttribute('src', 'img/WallDark.png');
        document.querySelector('.darkMode').style.background = 'white';
        document.querySelector('.darkOn').innerHTML = ('Light')
        document.querySelector('.darkOn').style.color = 'black';
        document.querySelector('.light').setAttribute('src', 'img/sunicon.png');
        document.querySelector('.light').style.width = ('20px');
        document.querySelector('.light').style.height = ('20px');
        document.querySelector('.light').style.top = ('9px');
        document.querySelector('.light').style.left = ('5px');
    } 

    else {
        disenableDarkmode();
        document.querySelector('.box').style.background = 'white';
        document.querySelector('.box').style.borderColor = 'black';
        document.querySelector('.logo').style.color = 'black';
        document.querySelector('.welcome').style.color = 'black';
        document.querySelector('.lorem').style.color = '#779341';
        document.querySelector('.account').style.color = '#779341';
        document.querySelector('.Sign').style.color = 'black';
        document.querySelector('.sign').style.color = '#779341';


        document.querySelector('.boxofgoogle').style.background = '#E9F1FF';
        document.querySelector('.boxofgoogle').style.borderColor = 'white';
        document.querySelector('.googletext').style.color = '#4285F4';

        document.querySelector('.boxoffacebook').style.background = 'white';
        document.querySelector('.boxoffacebook').style.borderColor = 'white';

        document.querySelector('.boxofapple').style.background = 'white';
        document.querySelector('.boxofapple').style.borderColor = 'white';

        document.querySelector('.box-1').style.background = 'white';
        document.querySelector('.box-1').style.borderColor = '#4285F4';
        document.querySelector('.boxaddress').style.color = '#808080';
        document.querySelector('.address').style.color = 'black';
        document.querySelector('.password').style.color = 'black';

        document.querySelector('.box-2').style.background = 'white';
        document.querySelector('.box-2').style.borderColor = '#808080';
        document.querySelector('.boxpassword').style.color = '#808080';

        document.querySelector('.forgot').style.color = '#4285F4';
        document.querySelector('.boxsign').style.background = '#779341';
        document.querySelector('.boxsign').style.borderColor = 'white';
        document.querySelector('.Signin').style.color = 'white';
        
        let img = document.querySelector('.back');
        img.setAttribute('src', 'img/the-interior-has-a-armchair-on-empty-white-wall-background-3d-rendering 1.png');
        document.querySelector('.darkMode').style.background = 'black';
        document.querySelector('.darkOn').innerHTML = ('Dark')
        document.querySelector('.darkOn').style.color = 'white';
        document.querySelector('.light').setAttribute('src', 'img/moonicon.png');
        document.querySelector('.light').style.width = ('30px');
        document.querySelector('.light').style.height = ('30px');
        document.querySelector('.light').style.top = ('3px');
        document.querySelector('.light').style.left = ('2px');
        }
})


let btn = document.querySelector('.boxsign');
btn.addEventListener('click', function() {
    document.querySelector('.popup-bgr').style.display = 'block';
})
let exit = document.querySelector('.popup-exit');
exit.addEventListener('click', function() {
    document.querySelector('.popup-bgr').style.display = 'none';
})