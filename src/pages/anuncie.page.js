import React, { useState, useEffect } from "react";

import swal from '@sweetalert/with-react'
import ProfissionalDataService from "../services/ProfissionalService";
import CidadeDataService from "../services/CidadeService";
import ServicoDataService from "../services/ServicoService";
import Anuncieimagem from "../assets/Slide5.PNG";
import LogoOnservice from "../assets/LogoSimboloLaranja.png";
import { BiErrorCircle } from 'react-icons/bi';

import "../styles/anuncie.css";
import { Multiselect } from 'multiselect-react-dropdown';

import NumberFormat from 'react-number-format';

const Anuncie = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [birthday, setBirthday] = useState("")
  const [gender, setGender] = useState("")
  const [phone, setPhone] = useState("")
  const [cep, setCep] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [citiesOffer, setCitiesOffer] = useState([])
  const [servicesOffer, setServicesOffer] = useState([])
  const [picture, setPicture] = useState([])
  const [file, setFile] = useState(null)
  const [description, setDescription] = useState("")
  const [w2w, setW2W] = useState(false)
  const [terms, setTerms] = useState(false)

  // Dados do banco
  const [citiesAvailable, setCitiesAvailable] = useState([])
  const [servicesAvailable, setServicesAvailable] = useState([])

  const DropdownStates = [
    { name: 'Acre', id: 'AC', value: 'AC' },
    { name: 'Alagoas', id: 'AL', value: 'AL' },
    { name: 'Amapá', id: 'AP', value: 'AP' },
    { name: 'Amazonas', id: 'AM', value: 'AM' },
    { name: 'Bahia', id: 'BA', value: 'BA' },
    { name: 'Ceará', id: 'CE', value: 'CE' },
    { name: 'Distrito Federal', id: 'DF', value: 'DF' },
    { name: 'Espírito Santo', id: 'ES', value: 'ES' },
    { name: 'Goiânia', id: 'GO', value: 'GO' },
    { name: 'Maranhão', id: 'MA', value: 'MA' },
    { name: 'Mato Grosso', id: 'MT', value: 'MT' },
    { name: 'Mato Grosso do Sul', id: 'MS', value: 'MS' },
    { name: 'Minas Gerais', id: 'MG', value: 'MG' },
    { name: 'Pará', id: 'PA', value: 'PA' },
    { name: 'Paraíba', id: 'PB', value: 'PB' },
    { name: 'Paraná', id: 'PR', value: 'PR' },
    { name: 'Pernambuco', id: 'PE', value: 'PE' },
    { name: 'Piauí', id: 'PI', value: 'PI' },
    { name: 'Rio de Janeiro', id: 'RJ', value: 'RJ' },
    { name: 'Rio Grande do Norte', id: 'RN', value: 'RN' },
    { name: 'Rio Grande do Sul', id: 'RS', value: 'RS' },
    { name: 'Rondônia', id: 'RO', value: 'RO' },
    { name: 'Roraima', id: 'RR', value: 'RR' },
    { name: 'Santa Catarina', id: 'SC', value: 'SC' },
    { name: 'São Paulo', id: 'SP', value: 'SP' },
    { name: 'Sergipe', id: 'SE', value: 'SE' },
    { name: 'Tocantins', id: 'TO', value: 'TO' },
  ]

  const DropdownGender = [
    { name: 'Masculino', id: "M", value: "masculino" },
    { name: 'Feminino', id: "F", value: "feminino" },
    { name: 'Prefiro não dizer', id: "X", value: "outro" },
  ]

  const DropdownW2W = [
    /* W2W */
    { name: 'Sim', id: "w2w_true", value: true },
    { name: 'Não', id: "w2w_false", value: false },
  ]

  const style = {
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
      "padding-left": "19px",
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
  }

  const handleChange = (event) => {
    const field = event.target.id;
    if (field === "name") {
      setName(event.target.value)
    }
    else if (field === "email") {
      setEmail(event.target.value)
    }
    else if (field === "city") {
      setCity(event.target.value)
    }
    else if (field === "file") {
      setFile(event.target.files[0])
    }
    else if (field === "description") {
      setDescription(event.target.value)
    }
    else if (field === "terms") {
      setTerms(event.target.checked)
    }
    // console.log(this.state)
  }

  const retrieveCidades = (items) => {
    let cidades = [];

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      cidades.push({
        key: key,
        name: data.name,
        state: data.state,
        country: data.country,
      });
    });

    setCitiesAvailable(cidades)
  }

  const retrieveServicos = (items) => {
    let servicos = [];

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      servicos.push({
        key: key,
        name: data.name,
        category: data.category,
      });
    });

    setServicesAvailable(servicos)
  }

  useEffect(() => {
    CidadeDataService.getAll().on("value", retrieveCidades);
    ServicoDataService.getAll().on("value", retrieveServicos);

    return () => {
      CidadeDataService.getAll().off("value", retrieveCidades);
      ServicoDataService.getAll().off("value", retrieveServicos);
    }
  }, [])

  const sendErrorAlert = (msg) => {
    swal({
      className: "swal-dimensions--register",
      button: {
        className: "button-alert",
      },
      content: (
        <div>
          <img src={LogoOnservice} width="90px" alt="SwalRegister" />
          <BiErrorCircle id="erroriconregister" />
          <h3 class="swal-title--register">Ops, algo deu errado...</h3>
          <p class="swal-text--register">
            {msg}
          </p>
        </div>
      )
    })
  }

  sendSucessAlert = (msg) => {
    swal({
      className: "swal-dimensions--register",
      button: {
        className: "button-alert",
      },
      content: (
        <div>
          <img src={LogoOnservice} width="90px" alt="SwalRegister" />
          <BiErrorCircle id="erroriconregister" />
          <h3 class="swal-title--register">Concluído!</h3>
          <p class="swal-text--register">
            {msg}
          </p>
        </div>
      )
    })
  }

  const handleOnClick = e => {
    e.preventDefault();
    savePrestador();
  }

  const savePrestador = () => {

    if (name === "") {
      sendErrorAlert("Seu nome não pode estar em branco!")
      return;
    }

    if (email === "") {
      sendErrorAlert("Seu endereço de e-mail não pode estar em branco!")
      return;
    } else {
      var re = /\S+@\S+\.\S+/;
      if (re.test(email) === false) {
        sendErrorAlert("Seu endereço de e-mail não é válido!")
        return;
      }
    }

    if (birthday.value === "" || birthday === "") {
      sendErrorAlert("Sua data de nascimento não pode estar em branco!")
      return;
    } else {
      var date = birthday.formattedValue
      var data_array = date.split("/");                           // quebra a data em array
      if (data_array[0].length !== 4) {
        date = data_array[2] + "-" + data_array[1] + "-" + data_array[0]; // remonto a data no formato yyyy/MM/dd
      }
      var today = new Date();
      var birthdayTemp = new Date(date)
      var age = today.getFullYear() - birthdayTemp.getFullYear()
      var m = today.getMonth() - birthdayTemp.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthdayTemp.getDate())) age--;

      if (age < 18) {
        sendErrorAlert("Você não pode se cadastrar sendo menor de 18 anos!")
        return;
      }
    }

    if (gender === "") {
      sendErrorAlert("Seu gênero não pode estar em branco!")
      return;
    }

    if (phone.value === "" || phone === "") {
      sendErrorAlert("Seu número de celular não pode estar em branco!")
      return;
    } else {
      re = /\(?\d{2}\)?\d{8,9}/;
      if (re.test(phone.value) === false) {
        sendErrorAlert("Seu número de celular está errado!")
        return;
      }
    }

    if (cep === "" || cep.value === "") {
      sendErrorAlert("Seu cep não pode estar em branco!")
      return;
    }

    if (state === "") {
      sendErrorAlert("Seu estado não pode estar em branco!")
      return;
    }

    if (city === "") {
      sendErrorAlert("Sua cidade não pode estar em branco!")
      return;
    }

    if (description === "") {
      sendErrorAlert("Sua descrição não pode estar em branco!")
      return;
    }

    if (w2w !== false && w2w !== true) {
      sendErrorAlert("Você deve selecionar se seu serviço é exclusivo para mulheres!")
      return;
    }

    if (terms === false) {
      sendErrorAlert("Você deve concordar com nossos termos!")
      return;
    }

    ProfissionalDataService.uploadImage(email,file)
    .then(uploadUrl => {

      var data = {
        name: name,
        email: email,
        birthday: birthday.formattedValue,
        gender: gender,
        phone: phone.value,
        cep: cep.value,
        state: state,
        city: city,
        cidades: citiesOffer,
        servicos: servicesOffer,
        picture: uploadUrl,
        description: description,
        w2w: w2w,
        terms: terms
      };

      ProfissionalDataService.create(data)
      .then(res => {
        swal("Concluído", "Sua inscrição foi enviada, você deve ser aprovado em breve!", "success");
        newPrestador();
      })
      .catch(e => {
        swal("Ops, algo deu errado...", "Talvez nosso sistema esteja fora do ar, tente novamente mais tarde!", "error");
        console.log(e);
      });
    })
  }

  const newPrestador = () => {
    setName("")
    setEmail("")
    setBirthday("")
    setGender("")
    setPhone("")
    setCep("")
    setState("")
    setCity("")
    setCitiesOffer([])
    setServicesOffer([])
    setPicture([])
    setFile(undefined)
    setDescription("")
    setW2W(false)
    setTerms(false)
    document.getElementById("register-form").reset()
    document.getElementById("birthday").setAttribute("value", "")
    document.getElementById("phone").setAttribute("value", "")
    document.getElementById("cep").setAttribute("value", "")
  }

  const onSelectBirthday = (values) => {
    setBirthday(values)
  }

  const onSelectPhone = (values) => {
    setPhone(values)
  }

  const onSelectCEP = (values) => {
    setCep(values)
  }

  const onSelectState = (selectedList, selectedItem) => {
    setState(selectedItem.value)
  }

  const onSelectCity = (selectedList, selectedItem) => {
    setCitiesOffer(citiesOffer.concat(selectedItem.name))
  }

  const onRemoveCity = (selectedList, removedItem) => {
    let index = citiesOffer.indexOf(removedItem.name)
    citiesOffer.splice(index, 1)
  }

  const onSelectService = (selectedList, selectedItem) => {
    setServicesOffer(servicesOffer.concat(selectedItem.name))
  }

  const onRemoveService = (selectedList, removedItem) => {
    let index = servicesOffer.indexOf(removedItem.name)
    servicesOffer.splice(index, 1)
  }

  const onSelectGender = (selectedList, selectedItem) => {
    setGender(selectedItem.value)
  }

  const onSelectW2W = (selectedList, selectedItem) => {
    setW2W(selectedItem.value)
  }

  return (
    <div class="row">
      <div class="col">
        <img src={Anuncieimagem} width="500px" alt="Imagem Página Anuncie" />
      </div>
      <div class="col register-right">
        <h2>ANUNCIE-SE AQUI</h2>
        <form id="register-form">
          <div class="form-item">
            <label for="name"><span title="Campo obrigatório" style={{ color: "red" }}>*</span>Nome:</label>
            <input id="name" type="text" class='' required placeholder="Insira seu nome completo, conforme documento de identificação" onChange={handleChange.bind(this)} />
          </div>
          <div class="form-item">
            <label for="email"><span title="Campo obrigatório" style={{ color: "red" }}>*</span>E-mail:</label>
            <input id="email" type="email" class='' required placeholder="Insira seu e-mail mais utilizado" onChange={handleChange.bind(this)} />
          </div>
          <div class="form-item">
            <label for="birthday"><span title="Campo obrigatório" style={{ color: "red" }}>*</span>Data de Nascimento:</label>
            <NumberFormat id="birthday" placeholder="DD/MM/AAAA" onValueChange={onSelectBirthday} format="##/##/####" mask="_" />
          </div>
          <div class="form-item">
            <label for="gender"><span title="Campo obrigatório" style={{ color: "red" }}>*</span>Gênero:</label>
            <div class="form-item">
              <Multiselect
                options={DropdownGender} // Options to display in the dropdown
                onSelect={onSelectGender} // Function will trigger on select event
                displayValue="name" // Property name to display in the dropdown options
                closeOnSelect={true}
                showArrow={true}
                id="GenderDropdown"
                style={style}
                singleSelect={true}
                avoidHighlightFirstOption={true}
                placeholder="Selecione uma opção"
              />
            </div>
          </div>
          <div class="form-item">
            <label for="phone"><span title="Campo obrigatório" style={{ color: "red" }}>*</span>Celular:</label>
            <NumberFormat id="phone" placeholder="Insira somente os números do seu celular, com ddd" onValueChange={onSelectPhone} format="(##) #####-####" mask="_" />
            <small class=''>*É obrigatório que este número tenha Whatsapp</small>
          </div>
          <div class="form-item">
            <label for="cep"><span title="Campo obrigatório" style={{ color: "red" }}>*</span>CEP:</label>
            <NumberFormat id="cep" placeholder="Insira apenas os números do seu CEP" onValueChange={onSelectCEP} format="#####-###" mask="_" />
          </div>
          <div class="form-item">
            <label for="state"><span title="Campo obrigatório" style={{ color: "red" }}>*</span>Estado:</label>
            <Multiselect
              options={DropdownStates} // Options to display in the dropdown
              onSelect={onSelectState} // Function will trigger on select event
              displayValue="name" // Property name to display in the dropdown options
              closeOnSelect={true}
              showArrow={true}
              id="StatesDropdown"
              style={style}
              singleSelect={true}
              avoidHighlightFirstOption={true}
              placeholder="Selecione seu estado de residência"
            />
          </div>
          <div class="form-item">
            <label for="city"><span title="Campo obrigatório" style={{ color: "red" }}>*</span>Cidade:</label>
            <input id="city" type="text" class='' required placeholder="Informe sua cidade" onChange={handleChange.bind(this)} />
          </div>
          <div class="form-item">
            <label for="cities"><span title="Campo obrigatório" style={{ color: "red" }}>*</span>Local de Trabalho:</label>
            <div class="form-item">
              <Multiselect
                options={citiesAvailable} // Options to display in the dropdown
                onSelect={onSelectCity} // Function will trigger on select event
                onRemove={onRemoveCity} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
                groupBy="state"
                showArrow={true}
                id="CitiesDropdown"
                style={style}
                selectionLimit={4}
                placeholder="Selecione todas as cidades onde você oferece seus serviços"
              />
            </div>
          </div>
          <div class="form-item">
            <label for="services"><span title="Campo obrigatório" style={{ color: "red" }}>*</span>Profissão:</label>
            <div class="form-item">
              <Multiselect
                options={servicesAvailable} // Options to display in the dropdown
                onSelect={onSelectService} // Function will trigger on select event
                onRemove={onRemoveService} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
                groupBy="category"
                showArrow={true}
                id="ServicesDropdown"
                style={style}
                selectionLimit={4}
                placeholder="Selecione de 1 a 4 profissões"
              />
            </div>
          </div>
          <div class="form-item">
            <label for="file"><span title="Campo obrigatório" style={{ color: "red" }}>*</span>Foto de Perfil:</label>
            <input id="file" type="file" name="file" class="" required onChange={handleChange.bind(this)} />
            <small class=''>*Insira uma foto que tenha fundo branco e mostre bem o seu rosto. Logotipos não são aceitos.</small>
          </div>
          <div class="form-item">
            <label class="label"><span title="Campo obrigatório" style={{ color: "red" }}>*</span>Descrição do Serviço:</label>
            <div style={{ textAlign: "center" }}>
              <textarea id="description" name="description" required class="textarea-contact" rows="6" placeholder="Escreva uma descrição dos seus serviços, com o máximo de detalhes possível, em até 420 caracteres" onChange={handleChange.bind(this)}></textarea>
            </div>
          </div>
          <div class="form-item">
            <label for="w2w"><span title="Campo obrigatório" style={{ color: "red" }}>*</span>Serviço exclusivo para mulheres?</label>
            <div class="form-item">
              <Multiselect
                options={DropdownW2W} // Options to display in the dropdown
                onSelect={onSelectW2W} // Function will trigger on select event
                displayValue="name" // Property name to display in the dropdown options
                closeOnSelect={true}
                showArrow={true}
                id="W2WDropdown"
                style={style}
                singleSelect={true}
                avoidHighlightFirstOption={true}
                placeholder="Selecione uma opção"
              />
            <small class=''>*Será implementado em breve.</small>
            </div>
          </div>
          <div class="form-item">
            <div>
              <label class="container">
                <input id="terms" name="terms" type="checkbox" onChange={handleChange.bind(this)} />
                <span class="checkmark"></span>
              </label>
              <label for="checkbox" style={{ marginLeft: "10%" }}>Li e aceito o <a href="/codigo-de-conduta">Código de Conduta</a> e a <a href="/politica-de-privacidade">Política de Privacidade</a></label>
            </div>
            <p style={{ fontSize: "8pt", marginLeft: "5.5%", marginRight: "3%" }}>Ao clicar no botão <span style={{ fontWeight: "bold" }}>“Registrar-se”</span> você concorda e expressa sua vontade livre, consciente e informada de cumprir com e ser regido por nosso <a href="/codigo-de-conduta">Código de Conduta</a> e <a href="/politica-de-privacidade">Política de Privacidade</a></p>
          </div>
          <button type='submit' onClick={handleOnClick.bind(this)} class='btn-primary'>Registre-se</button>
        </form>
      </div>

    </div>
  )
}

export default Anuncie;
