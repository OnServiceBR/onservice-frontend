import React, { Component } from "react";

import swal from '@sweetalert/with-react'
import PrestadorDataService from "../services/prestador.service";
import CidadeDataService from "../services/cidade.service";
import ServicoDataService from "../services/servico.service";
import Anuncieimagem from "../assets/Slide5.PNG";

import "../styles/anuncie.css";
import { Multiselect } from 'multiselect-react-dropdown';

import NumberFormat from 'react-number-format';

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      cpf: "",
      email: "",
      birthday: "",
      gender: "",
      phone: "",
      cep: "",
      state: "",
      city: "",
      address: "",
      complement: "",
      cidades: [],
      servicos: [],
      picture: "",
      file: undefined,
      description: "",
      w2w: false,
      terms: false,
      
      cities: [],
      services: [],

      DropdownStates: [
        {name: 'Acre', id: 'AC', value: 'AC'},
        {name: 'Alagoas', id: 'AL', value: 'AL'},
        {name: 'Amapá', id: 'AP', value: 'AP'},
        {name: 'Amazonas', id: 'AM', value: 'AM'},
        {name: 'Bahia', id: 'BA', value: 'BA'},
        {name: 'Ceará', id: 'CE', value: 'CE'},
        {name: 'Distrito Federal', id: 'DF', value: 'DF'},
        {name: 'Espírito Santo', id: 'ES', value: 'ES'},
        {name: 'Goiânia', id: 'GO', value: 'GO'},
        {name: 'Maranhão', id: 'MA', value: 'MA'},
        {name: 'Mato Grosso', id: 'MT', value: 'MT'},
        {name: 'Mato Grosso do Sul', id: 'MS', value: 'MS'},
        {name: 'Minas Gerais', id: 'MG', value: 'MG'},
        {name: 'Pará', id: 'PA', value: 'PA'},
        {name: 'Paraíba', id: 'PB', value: 'PB'},
        {name: 'Paraná', id: 'PR', value: 'PR'},
        {name: 'Pernambuco', id: 'PE', value: 'PE'},
        {name: 'Piauí', id: 'PI', value: 'PI'},
        {name: 'Rio de Janeiro', id: 'RJ', value: 'RJ'},
        {name: 'Rio Grande do Norte', id: 'RN', value: 'RN'},
        {name: 'Rio Grande do Sul', id: 'RS', value: 'RS'},
        {name: 'Rondônia', id: 'RO', value: 'RO'},
        {name: 'Roraima', id: 'RR', value: 'RR'},
        {name: 'Santa Catarina', id: 'SC', value: 'SC'},
        {name: 'São Paulo', id: 'SP', value: 'SP'},
        {name: 'Sergipe', id: 'SE', value: 'SE'},
        {name: 'Tocantins', id: 'TO', value: 'TO'},
      ],
      
      DropdownGender: [
        /* W2W */
        {name: 'Masculino', id: "M", value: "masculino"},
        {name: 'Feminino', id: "F", value: "feminino"},
        {name: 'Prefiro não dizer', id: "X", value: "outro"},
      ],

      DropdownW2W: [
        /* W2W */
        {name: 'Sim', id: "w2w_true", value: true},
        {name: 'Não', id: "w2w_false", value: false},
      ],
    };
    this.style = {
      chips: {
        background: "rgb(237, 125, 49)",
        color: "rgb(255,255,255)"
      },
      searchBox: {
        "border": "0.5pt none rgb(118,113,113)",
        "border-radius": "0.15cm",
        padding: 0,
      },
      inputField: {
        margin: 0,
        "padding-left":"19px",
        width: "100%",
      },
      multiselectContainer: {
        color: "rgb(175,171,171)",
        width: "95%",
        "margin-right": "auto",
        "margin-left": "auto"
      },
      groupHeading: {
        color: "rgb(237, 125, 49)",
      },
      option: { // To change css for dropdown options
        color: "rgb(118,113,113)",
      },
    };
    this.onSelectCity = this.onSelectCity.bind(this);
    this.onRemoveCity = this.onRemoveCity.bind(this);
    this.onSelectService = this.onSelectService.bind(this);
    this.onRemoveService = this.onRemoveService.bind(this);
    this.onSelectState = this.onSelectState.bind(this);
    this.onSelectW2W = this.onSelectW2W.bind(this);
    this.onSelectPhone = this.onSelectPhone.bind(this);
    this.onSelectCEP = this.onSelectCEP.bind(this);
    this.onSelectBirthday = this.onSelectBirthday.bind(this);
    this.onSelectCPF = this.onSelectCPF.bind(this);
    this.onSelectGender = this.onSelectGender.bind(this);
  }
  
  handleChange(event) {
    const field = event.target.id;
    if (field === "name")
    {
      this.setState({ name: event.target.value });
    }
    else if (field === "email")
    {
      this.setState({ email: event.target.value });
    }
    else if (field === "city")
    {
      this.setState({ city: event.target.value });
    }
    else if (field === "address")
    {
      this.setState({ address: event.target.value });
    }
    else if (field === "complement")
    {
      this.setState({ complement: event.target.value });
    }
    else if (field === "file")
    {
      this.setState({ file: event.target.files });
    }
    else if (field === "description")
    {
      this.setState({ description: event.target.value });
    }
    else if (field === "terms")
    {
      this.setState({ terms: event.target.value });
    }
    // console.log(this.state)
  }

  componentDidMount() {
    this.retrieveCidades();
    this.retrieveServicos();
  }

  sendErrorAlert = (msg) => {
    swal({
      icon: "error",
      button:{
        className: "button-alert",
      },
      content: (
        <div>
          <h3>Ops, algo deu errado...</h3>
          <p>
            {msg}
          </p>
        </div>
      )
    })
  }

  savePrestador = () => {

    if (this.state.name === ""){
      this.sendErrorAlert("Seu nome não pode estar em branco!")
      return;
    }
    if (this.state.cpf.value !== "" && this.state.cpf !== ""){
      var cpf = this.state.cpf.value;
      if (cpf.length !== 11 || 
        cpf === "00000000000" || 
        cpf === "11111111111" || 
        cpf === "22222222222" || 
        cpf === "33333333333" || 
        cpf === "44444444444" || 
        cpf === "55555555555" || 
        cpf === "66666666666" || 
        cpf === "77777777777" || 
        cpf === "88888888888" || 
        cpf === "99999999999"){
          this.sendErrorAlert("Seu número de CPF está errado!")
          return;
      }
      // Verifica primeiro dígito
      var add = 0;
      for (let i=0; i < 9; i ++){
        add += parseInt(cpf.charAt(i)) * (10 - i);	
      }
      let rev = 11 - (add % 11);	
      if (rev === 10 || rev === 11)		
        rev = 0;	
      if (rev !== parseInt(cpf.charAt(9))){
        this.sendErrorAlert("Seu número de CPF está errado!")
        return;
      }
      // Verifica segundo dígito
      add = 0;	
      for (let i = 0; i < 10; i ++){
        add += parseInt(cpf.charAt(i)) * (11 - i);	
      }
      rev = 11 - (add % 11);	
      if (rev === 10 || rev === 11)	
        rev = 0;	
      if (rev !== parseInt(cpf.charAt(10))){
        this.sendErrorAlert("Seu número de CPF está errado!")
        return;
      }
    }else{
      this.sendErrorAlert("Seu número de CPF não pode estar em branco!")
      return;
    }

    if (this.state.email === "") {
      this.sendErrorAlert("Seu endereço de email não pode estar em branco!")
      return;
    }else{
      var re = /\S+@\S+\.\S+/;
      if(re.test(this.state.email)===false){
        this.sendErrorAlert("Seu endereço de email não é válido!")
        return;
      }
    }

    if (this.state.birthday.value === "" || this.state.birthday === ""){
      this.sendErrorAlert("Sua data de nascimento não pode estar em branco!")
      return;
    }else{
      var data = this.state.birthday.formattedValue
      var data_array = data.split("/");                           // quebra a data em array
      if(data_array[0].length !== 4){
        data = data_array[2]+"-"+data_array[1]+"-"+data_array[0]; // remonto a data no formato yyyy/MM/dd
      }
      var today = new Date();
      var birthday = new Date(data)
      var age = today.getFullYear() - birthday.getFullYear()
      var m = today.getMonth() - birthday.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) age--;
  
      if(age < 18){
        this.sendErrorAlert("Você não pode se cadastrar sendo menor de 18 anos!")
        return;
     }
    }

    if (this.state.gender === "") {
      this.sendErrorAlert("Seu gênero não pode estar em branco!")
      return;
    }

    if (this.state.phone.value === "" || this.state.phone === ""){
      this.sendErrorAlert("Seu número de celular não pode estar em branco!")
      return;
    }else{
      re = /\(?\d{2}\)?\d{8,9}/;
      if (re.test(this.state.phone.value) === false){
        this.sendErrorAlert("Seu número de celular está errado!")
        return;
      }
    }
  
    if (this.state.cep === "" || this.state.cep.value === "") {
      this.sendErrorAlert("Seu cep não pode estar em branco!")
      return;
    }

    if (this.state.state === "") {
      this.sendErrorAlert("Seu estado não pode estar em branco!")
      return;
    }
  
    if (this.state.city === "") {
      this.sendErrorAlert("Sua cidade não pode estar em branco!")
      return;
    }
  
    if (this.state.address === "") {
      this.sendErrorAlert("Seu endereço não pode estar em branco!")
      return;
    }
  
    if (this.state.description === "") {
      this.sendErrorAlert("Sua descrição não pode estar em branco!")
      return;
    }
  
    if (this.state.w2w !== false || this.state.w2w !== true) {
      this.sendErrorAlert("Você deve selecionar se seu serviço é exclusivo para mulheres!")
      return;
    }
  
    if (this.state.terms === false){
      this.sendErrorAlert("Você deve concordar com nossos termos!")
      return;
    }

    const formData = new FormData()
    formData.append("cpf", this.state.cpf)
    formData.append('file', this.state.file[0])

    PrestadorDataService.upload(formData)
      .then(res => {
        console.log("Image Uploaded")
        // console.log(res.data)
        var data = {
          name: this.state.name,
          cpf: this.state.cpf,
          email: this.state.email,
          birthday: this.state.birthday,
          gender: this.state.gender,
          phone: this.state.phone,
          cep: this.state.cep,
          state: this.state.state,
          city: this.state.city,
          address: this.state.address,
          complement: this.state.complement,
          cidades: this.state.cities,
          servicos: this.state.services,
          description: this.state.description,
          picture: res.data.filename,
          w2w: this.state.w2w,
          terms: this.state.terms
        };
        console.log(data)
        PrestadorDataService.create(data)
          .then(res => {
            this.setState({
              id: res.data.id,
              name: res.data.name,
              cpf: res.data.cpf,
              email: res.data.email,
              birthday: res.data.birthday,
              gender: res.data.gender,
              phone: res.data.phone,
              cep: res.data.cep,
              state: res.data.state,
              city: res.data.city,
              address: res.data.address,
              complement: res.data.complement,
              cities: res.data.cities,
              services: res.data.services,
              w2w: res.data.w2w,
              terms: res.data.terms,
              
              published: res.data.published,

              submitted: true
            });
            swal("Concluído", "Sua inscrição foi enviada, você deve ser aprovado em breve!", "success");
            this.newPrestador();
          })
          .catch(e => {
            swal("Ops, algo deu errado...", "Talvez nosso sistema esteja fora do ar, tente novamente mais tarde!", "error");
            console.log(e);
          });
      })
  }

  retrieveCidades() {
    CidadeDataService.getAll()
      .then(res => {
        this.setState({
          cidades: res.data
        });
        // console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  retrieveServicos() {
    ServicoDataService.getAll()
      .then(res => {
        this.setState({
          servicos: res.data
        });
        // console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newPrestador() {
    this.setState({
      id: null,
      name: "",
      cpf: "",
      email: "",
      birthday: "",
      gender: "",
      phone: "",
      cep: "",
      state: "",
      city: "",
      address: "",
      complement: "",
      cidades: [],
      servicos: [],
      picture: "",
      file: undefined,
      description: "",
      w2w: false,
      terms: false,
      
      submitted: false
    });
  }
  
  onSelectCPF(values) {
    this.setState({ cpf: values });
  }

  onSelectBirthday(values) {
    this.setState({ birthday: values });
  }
  
  onSelectGender(values) {
    this.setState({ gender: values });
  }

  onSelectPhone(values) {
    this.setState({ phone: values });
  }

  onSelectCEP(values) {
    this.setState({ cep: values });
  }

  onSelectState(selectedList, selectedItem) {
    this.setState({ state: selectedItem.value });
  }

  onSelectCity(selectedList, selectedItem) {
    let {cities} = this.state
    this.setState({ cities: cities.concat(selectedItem.id) });
  }

  onRemoveCity(selectedList, removedItem) {
    let {cities} = this.state
    let index = cities.indexOf(removedItem.id)
    cities.splice(index, 1)
    this.setState({ cities: cities });
  }

  onSelectService(selectedList, selectedItem) {
    let {services} = this.state
    this.setState({ services: services.concat(selectedItem.id) });
  }

  onRemoveService(selectedList, removedItem) {
    let {services} = this.state
    let index = services.indexOf(removedItem.id)
    services.splice(index, 1)
    this.setState({ services: services });
  }

  onSelectW2W(selectedList, selectedItem) {
    this.setState({ w2w: selectedItem.value });
  }

  render() {
    const { cidades, servicos } = this.state;
    return(
      <div class="row">
        <div class="col">
          <img src={Anuncieimagem} width="500px" alt="Imagem Página Anuncie"/>
        </div>
        <div class="col register-right">
          <h2>ANUNCIE-SE AQUI</h2>
          <div class="form-item">
            <label for="name"><span title="Campo obrigatório" style={{color: "red"}}>*</span>Nome:</label>
            <input id="name" type="text" class='' required placeholder="Insira seu nome completo, conforme documento de identificação" onChange={this.handleChange.bind(this)} />
          </div>
          <div class="form-item">
            <label for="cpf"><span title="Campo obrigatório" style={{color: "red"}}>*</span>CPF:</label>
            <NumberFormat id="cpf" placeholder="Insira seu nome CPF" onValueChange={this.onSelectCPF} format="###.###.###-##" mask="_" />
          </div>
          <div class="form-item">
            <label for="email"><span title="Campo obrigatório" style={{color: "red"}}>*</span>E-mail:</label>
            <input id="email" type="email" class='' required placeholder="Insira seu e-mail mais utilizado" onChange={this.handleChange.bind(this)}/>
          </div>
          <div class="form-item">
            <label for="birthday"><span title="Campo obrigatório" style={{color: "red"}}>*</span>Data de Nascimento:</label>
            <NumberFormat id="birthday" placeholder="DD/MM/AAAA" onValueChange={this.onSelectBirthday} format="##/##/####" mask="_" />
          </div>
          <div class="form-item">
            <label for="gender"><span title="Campo obrigatório" style={{color: "red"}}>*</span>Gênero:</label>
            <div class="form-item">
                <Multiselect
                options={this.state.DropdownGender} // Options to display in the dropdown
                onSelect={this.onSelectGender} // Function will trigger on select event
                displayValue="name" // Property name to display in the dropdown options
                closeOnSelect={true}
                showArrow={true}
                id="GenderDropdown"
                style={this.style}
                singleSelect={true}
                avoidHighlightFirstOption={true}
                placeholder="Selecione uma opção"
                />
              </div>
          </div>
          <div class="form-item">
            <label for="phone"><span title="Campo obrigatório" style={{color: "red"}}>*</span>Celular:</label>
            <NumberFormat id="phone" placeholder="Insira somente os números do seu celular, com ddd" onValueChange={this.onSelectPhone} format="(##) #####-####" mask="_" />
            <small class=''>*É obrigatório que este número tenha Whatsapp</small>
          </div>
          <div class="form-item">
            <label for="cep"><span title="Campo obrigatório" style={{color: "red"}}>*</span>CEP:</label>
            <NumberFormat id="cep" placeholder="Insira apenas os números do seu CEP" onValueChange={this.onSelectCEP} format="#####-###" mask="_" />
          </div>
          <div class="form-item">
            <label for="state"><span title="Campo obrigatório" style={{color: "red"}}>*</span>Estado:</label>
            <Multiselect
                options={this.state.DropdownStates} // Options to display in the dropdown
                onSelect={this.onSelectState} // Function will trigger on select event
                displayValue="name" // Property name to display in the dropdown options
                closeOnSelect={true}
                showArrow={true}
                id="StatesDropdown"
                style={this.style}
                singleSelect={true}
                avoidHighlightFirstOption={true}
                placeholder="Selecione seu estado de residência"
                />
          </div>
          <div class="form-item">
            <label for="city"><span title="Campo obrigatório" style={{color: "red"}}>*</span>Cidade:</label>
            <input id="city" type="text" class='' required placeholder="Informe sua cidade" onChange={this.handleChange.bind(this)}/>
          </div>
          <div class="form-item">
            <label for="address"><span title="Campo obrigatório" style={{color: "red"}}>*</span>Endereço:</label>
            <input id="address" type="text" class='' required placeholder="Insira sua rua/avenida e número" onChange={this.handleChange.bind(this)} />
          </div>
          <div class="form-item">
            <label for="complement">Complemento:</label>
            <input id="complement" type="text" class='' placeholder="Insira o complemento'" onChange={this.handleChange.bind(this)} />
          </div>
          <div class="form-item">
            <label for="cities"><span title="Campo obrigatório" style={{color: "red"}}>*</span>Local de Trabalho:</label>
              <div class="form-item">
                <Multiselect
                options={cidades} // Options to display in the dropdown
                onSelect={this.onSelectCity} // Function will trigger on select event
                onRemove={this.onRemoveCity} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
                groupBy="state"
                closeOnSelect={false}
                showArrow={true}
                id="CitiesDropdown"
                style={this.style}
                selectionLimit={4}
                placeholder="Selecione todas as cidades onde você oferece seus serviços"
                />
              </div>
          </div>
          <div class="form-item">
            <label for="services"><span title="Campo obrigatório" style={{color: "red"}}>*</span>Profissão:</label>
              <div class="form-item">
                <Multiselect
                options={servicos} // Options to display in the dropdown
                onSelect={this.onSelectService} // Function will trigger on select event
                onRemove={this.onRemoveService} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
                groupBy="category"
                closeOnSelect={false}
                showArrow={true}
                id="ServicesDropdown"
                style={this.style}
                selectionLimit={4}
                placeholder="Selecione de 1 a 4 profissões"
                />
              </div>
          </div>
          <div class="form-item">
            <label for="file"><span title="Campo obrigatório" style={{color: "red"}}>*</span>Foto de Perfil:</label>
            <input id="file" type="file" name="file" class="" required onChange={this.handleChange.bind(this)} />
            <small class=''>*Insira uma foto que tenha fundo branco e mostre bem o seu rosto. Logotipos não são aceitos.</small>
          </div>
          <div class="form-item">
              <label class="label"><span title="Campo obrigatório" style={{color: "red"}}>*</span>Descrição do Serviço:</label>
              <div style={{textAlign: "center"}}>
                <textarea id="description" name="description" required class="textarea-contact" rows="6" placeholder="Escreva uma descrição dos seus serviços, com o máximo de detalhes possível" onChange={this.handleChange.bind(this)}></textarea>
              </div>
            </div>
          <div class="form-item">
            <label for="w2w"><span title="Campo obrigatório" style={{color: "red"}}>*</span>Serviço exclusivo para mulheres?</label>
              <div class="form-item">
                <Multiselect
                options={this.state.DropdownW2W} // Options to display in the dropdown
                onSelect={this.onSelectW2W} // Function will trigger on select event
                displayValue="name" // Property name to display in the dropdown options
                closeOnSelect={true}
                showArrow={true}
                id="W2WDropdown"
                style={this.style}
                singleSelect={true}
                avoidHighlightFirstOption={true}
                placeholder="Selecione uma opção"
                />
              </div>
          </div>
          <div class="form-item">
            <div>
              <label class="container">
                <input id="terms" name="terms" type="checkbox" onChange={this.handleChange.bind(this)} />
                <span class="checkmark"></span>
              </label>
              <label for="checkbox" style={{marginLeft:"10%"}}>Li e aceito o <a href="/codigo-de-conduta">Código de Conduta</a> e a <a href="/politica-de-privacidade">Política de Privacidade</a></label>
            </div>
            <p style={{fontSize:"8pt",marginLeft:"5.5%", marginRight:"3%"}}>Ao clicar no botão <span style={{fontWeight:"bold"}}>“Registrar-se”</span> você concorda e expressa sua vontade livre, consciente e informada de cumprir com e ser regido por nosso <a href="/codigo-de-conduta">Código de Conduta</a> e <a href="/politica-de-privacidade">Política de Privacidade</a></p>
          </div>  
          <button type='button' onClick={this.savePrestador.bind(this)} class='btn-primary'>Registre-se</button>
        </div>
        
      </div>
    )
  }
}
