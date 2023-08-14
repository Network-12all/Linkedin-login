         
          let boxes = document.querySelectorAll('.box');
        
          boxes.forEach(box => {
            let input = box.querySelector('input');
            let label = box.querySelector('label');
        
            input.addEventListener('focus', () => {
              label.classList.add('stay-label');
            });
        
            input.addEventListener('blur', () => {
              if (!input.value) {
                label.classList.remove('stay-label');
              }
            });
          });
        
        
        let passwordInput = document.getElementById('password');
        let eyeIcon = document.querySelector('.input-icon');
        
        eyeIcon.addEventListener('click', () =>{
          if (passwordInput.type === 'password'){
            eyeIcon.src = 'eye-open.svg';
            passwordInput.type = 'text';
          } else if(passwordInput.type === 'text'){
            eyeIcon.src = 'eye-splach.svg';
            passwordInput.type = 'password';
          }
        });
         
