document.querySelector('#btn').addEventListener('click', () => {
  const id = 'user';
  const password = '1234';

  if (id == document.querySelector('#id').value) {
    if (password == document.querySelector('#password').value) {
      window.location.href = 'index.html';
      alert('환영합니다!');
      return;
    } else {
      alert('비밀번호가 맞지 않습니다.');
      return;
    }
  } else {
    alert('아이디 혹은 비밀번호가 맞지 않습니다.');
    return;
  }
});
