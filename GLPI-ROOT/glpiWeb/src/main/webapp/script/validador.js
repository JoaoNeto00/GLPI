
function validar(){
   let nome = frmCadastro.nome.value
   let sobrenome = frmCadastro.sobrenome.value
   let telefone = frmCadastro.telefone.value
   let cargo = frmCadastro.cargo.value
   let departamento = frmCadastro.departamento.value 
   
   if(nome === ""){
      alert("preencha o campo nome")
      frmCadastro.nome.focus()
      return false
   } else if(sobrenome === ""){
      alert("preencha o campo sobrenome")
      frmCadastro.sobrenome.focus()
      return false
   } else if(telefone === ""){
      alert("preencha o campo telefone")
      frmCadastro.telefone.focus()
      return false
   } else if(cargo === ""){
      alert("preencha o campo cargo")
      frmCadastro.cargo.focus()
      return false
   } else if(departamento === ""){
      alert("preencha o campo departamento")
      frmCadastro.departamento.focus()
      return false
   } else {
      document.forms["frmCadastro"].submit();    
   }
 
}