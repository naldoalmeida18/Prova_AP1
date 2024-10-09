function showMenu(type) {
    document.getElementById("menu").style.display = "block";
    
    if (type === 'desktop') {
      document.getElementById("monitor-options").style.display = "block";
    } else {
      document.getElementById("monitor-options").style.display = "none";
    }
  }
  
  function calculateTotal(event) {
    event.preventDefault();
  
    const form = document.getElementById("configForm");
    const formData = new FormData(form);
  
    const name = formData.get("name");
    const cpu = formData.get("cpu").split(',');
    const memory = formData.get("memory").split(',');
    const storage = formData.get("storage").split(',');
    const os = formData.get("os").split(',');
    
    let total = parseInt(cpu[1]) + parseInt(memory[1]) + parseInt(storage[1]) + parseInt(os[1]);
  
    let config = `Cliente: ${name}\nCPU: ${cpu[0]}, Memória: ${memory[0]}, Armazenamento: ${storage[0]}, SO: ${os[0]}`;
    
    const monitor = formData.get("monitor");
    if (monitor) {
      const monitorDetails = monitor.split(',');
      total += parseInt(monitorDetails[1]);
      config += `, Monitor: ${monitorDetails[0]}`;
    }
  
    document.getElementById("config").innerText = config;
    document.getElementById("total").innerText = `Valor total: R$${total}`;
    document.getElementById("result").style.display = "block";
  }