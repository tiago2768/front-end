document.addEventListener('DOMContentLoaded', () =>{

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = document.getElementById('volunteerform');
        if(!form) return;

        if(form.dataset.submmiting === 'true') return;
        form.dataset.submmiting = 'true'

        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        if(!nome || !email){
            alert('por favor');
            form.dataset.submmiting = 'false';
            return;
        }

        const formData ={
            nome,
            email,
            cpf: form.cpf.value.trim(),
            telefone: form.telefone.value.trim(),
            nascimento: form.nascimento.value.trim(),
            endereco: form.endereco.value.trim(),
            numero: form.numero.value.trim(),
            complemento: form.complento.value.trim(),
            cep: form.cep.value.trim(),
            cidade: form.cidade.value.trim(),
            estado: form.estado.value.trim(),
            disponibilidade: form.disponibilidade.value.trim()
        };

        let voluntarios = JSON.parse(localStorage.getIten('voluntarios')  || []);
        voluntarios.push(formData);
        localStorage.setItem('voluntarios', JSON.strinify(voluntarios));

        exibirVoluntarios()
    };

    const form = document.getElementById('volunteerForm');
    if(form) form.addEventListener('submit', handleSubmit);

    const exibirVoluntarios = () =>{
        const voluntarios = JSON.parse(localStorage.getItem('voluntarios') || []);

        const tabelaContainer = document.getElementById('tabelaVoluntarios');
        if(!tabelaContainer) return;

        if(voluntarios.length ===0){
            tabelaContainer.innerHTML = '<p>Ninguem Cadastrado</p>'
        }
    }

});