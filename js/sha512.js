const encode = document.querySelector('.sha512-encode');
const clipboardIcon = document.querySelector('.clipboard-icon');
const result = document.querySelector('.decode-content');
const inputValue = document.querySelector('.encode-content');
encode.addEventListener('click', () => {
        result.removeAttribute("disabled");
        clipboardIcon.style.setProperty('display','block');
        result.style.setProperty('background-color','white');
        result.value = CryptoJS.SHA512(inputValue.value.trim()); 
});

clipboardIcon.addEventListener('click', () => {
        result.select();
        document.execCommand('copy');
});

