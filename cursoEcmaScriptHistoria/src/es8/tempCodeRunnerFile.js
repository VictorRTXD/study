 async function runCode() {
    // Tu código aquí 👈
    const url = 'https://domain-api-com';
  }
  
const checker = async() => {
    try {
        const check = await runCode();
        console.log(check);
        return check;
    } catch (error) {
        console.log(`ayuda: ${error}`);
    }
  }

  checker();