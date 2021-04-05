import React, { Component } from "react";
import PrestadorDataService from "../services/prestador.service";
import CidadeDataService from "../services/cidade.service";
import ServicoDataService from "../services/servico.service";
import Anuncieimagem from "../assets/Slide3.PNG";

import "../styles/anuncie.css";
import { Multiselect } from 'multiselect-react-dropdown';
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";

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
      city: "",
      address: "",
      complement: "",
      description: "",
      cidades: [],
      servicos: [],
      picture: "",
      w2w: "",
     
  

      cities: [],
      services: [],
      file: undefined,

      tecnologia: [],
      beleza: [],
      saude: [],
      manutencao: [],
      ensino: [],
      eventos: [],
      residencial: [],

      DropdownProfissões: [
        /* Beleza */
        {name: 'Artesã(o)', id: "Beleza1", category:"Beleza"},
        {name: 'Barbeiro(a)', id: "Beleza2", category:"Beleza"},
        {name: 'Cabelereiro(a)', id: "Beleza3", category:"Beleza"},
        {name: 'Maquiador(a)', id: "Beleza4", category:"Beleza"},
        {name: 'Micropigmentador(a)', id: "Beleza5", category:"Beleza"},
      
        /* Ensino */
        {name: 'Professor(a) de Programação', id: "Ensino1", category:"Ensino"},
        {name: 'Professor(a) de Inglês', id: "Ensino2", category:"Ensino"},
        {name: 'Professor(a) de Francês', id: "Ensino3", category:"Ensino"},
        {name: 'Tradutor(a)', id: "Ensino4", category:"Ensino"},

        /* Eventos */
        {name: 'Bartender', id: "Eventos1", category:"Eventos"},
        {name: 'DJ', id: "Eventos2", category:"Eventos"},
        {name: 'Garçom', id: "Eventos3", category:"Eventos"},
        {name: 'Segurança', id: "Eventos4", category:"Eventos"},

        /* Manutenção */
        {name: 'Eletricista', id: "Manutenção1", category:"Manutenção"},
        {name: 'Encanador', id: "Manutenção2", category:"Manutenção"},
        {name: 'Marido de Aluguel', id: "Manutenção3", category:"Manutenção"},
        {name: 'Pintor', id: "Manutenção4", category:"Manutenção"},

        /* Residencial */
        {name: 'Babá', id: "Residencial1", category:"Residencial"},
        {name: 'Cozinheiro(a)', id: "Residencial2", category:"Residencial"},
        {name: 'Faxineiro(a)', id: "Residencial3", category:"Residencial"},
        {name: 'Passeador(a) de Cães', id: "Residencial4", category:"Residencial"},

        /* Saúde */
        {name: 'Fisioterapeuta', id: "Saúde1", category:"Saúde"},
        {name: 'Personal Treiner', id: "Saúde2", category:"Saúde"},
        {name: 'Psicólogo(a)', id: "Saúde3", category:"Saúde"},
        {name: 'Quiroprata', id: "Saúde4", category:"Saúde"},
        {name: 'Terapeuta Ocupacional', id: "Saúde5", category:"Saúde"},

        /* Tecnologia */
        {name: 'Analista de Sistemas', id: "tecnologia1", category:"Tecnologia"},
        {name: 'Assistente Técnico', id: "tecnologia2", category:"Tecnologia"},
        {name: 'Marketing Digital', id: "tecnologia3", category:"Tecnologia"},
        {name: 'Técnico(a) em Comunicações', id: "tecnologia4", category:"Tecnologia"},
      
        /* Outros */
        {name: 'Montador(a) de Móveis', id: "Outros1", category:"Outros"},
        {name: 'Mudanças', id: "Outros2", category:"Outros"},
        {name: 'Motoboy', id: "Outros3", category:"Outros"},
        {name: 'Motorista', id: "Outros4", category:"Outros"},
      ],

      DropdownW2W: [
        /* W2W */
        {name: 'Sim', id: "w2w_true"},
        {name: 'Não', id: "w2w_false"},
      ],

      DropdownLocaldeTrabalho: [
      /* Local de Trabalho */
      {name: 'Ibaté', id: "city1", category:"SP"},
      {name: 'Itirapina', id: "city2", category:"SP"},
      {name: 'São Carlos', id: "city3", category:"SP"},
      {name: 'São Paulo', id: "city4", category:"SP"},
      ],
    };
    this.style = {
      chips: {
        background: "rgb(237, 125, 49)"
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
    }
  }
  
  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "cpf") {
      this.setState({ cpf: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "birthday") {
      this.setState({ birthday: event.target.value });
    } else if (field === "gender") {
      this.setState({ gender: event.target.value });
    } else if (field === "phone") {
      this.setState({ phone: event.target.value });
    } else if (field === "cep") {
      this.setState({ cep: event.target.value });
    } else if (field === "city") {
      this.setState({ city: event.target.value });
    } else if (field === "address") {
      this.setState({ address: event.target.value });
    } else if (field === "complement") {
      this.setState({ complement: event.target.value });
    } else if (field === "cities") {
      this.setState((state) => { cities: state.cities.push(parseInt(event.target.value)) });
    } else if (field === "services") {
      this.setState((state) => { services: state.services.push(parseInt(event.target.value)) });
    } else if (field === "file") {
      this.setState({ file: event.target.files });
    } else if (field === "description") {
      this.setState({ description: event.target.value });
    } else if (field === "w2w") {
      this.setState({ w2w: event.target.value });
    }
    // console.log(this.state)
  }

  componentDidMount() {
    this.retrieveCidades();
    this.retrieveServicos();
  }

  savePrestador = () => {
    // console.log(this.state.name)
    const formData = new FormData()
    formData.append("cpf", this.state.cpf)
    formData.append('file', this.state.file[0])

    PrestadorDataService.upload(formData)
      .then(res => {
        console.log("Image Uploaded")
        console.log(res.data)
        var data = {
          name: this.state.name,
          cpf: this.state.cpf,
          email: this.state.email,
          birthday: this.state.birthday,
          gender: this.state.gender,
          phone: this.state.phone,
          cep: this.state.cep,
          city: this.state.city,
          address: this.state.address,
          complement: this.state.complement,
          cidades: this.state.cities,
          servicos: this.state.services,
          description: this.state.description,
          picture: res.data.filename,
          w2w: this.state.w2w
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
              city: res.data.city,
              address: res.data.address,
              complement: res.data.complement,
              cities: res.data.cities,
              services: res.data.services,
              published: res.data.published,

              submitted: true
            });
            console.log(res.data);
            this.newPrestador();
          })
          .catch(e => {
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
    ServicoDataService.getTecnologia()
      .then(res => {
        this.setState({
          tecnologia: res.data
        });
        // console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
    ServicoDataService.getBeleza()
      .then(res => {
        this.setState({
          beleza: res.data
        });
        // console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
    ServicoDataService.getManutencao()
      .then(res => {
        this.setState({
          manutencao: res.data
        });
        // console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
    ServicoDataService.getSaude()
      .then(res => {
        this.setState({
          saude: res.data
        });
        // console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
    ServicoDataService.getEnsino()
      .then(res => {
        this.setState({
          ensino: res.data
        });
        // console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
    ServicoDataService.getEventos()
      .then(res => {
        this.setState({
          eventos: res.data
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
      city: "",
      address: "",
      complement: "",
      description: "",

      submitted: false
    });
  }

  onSelect(selectedList, selectedItem) {
  
  }

  onRemove(selectedList, removedItem) {
    
  }

  render() {
    const { cidades, tecnologia, beleza, manutencao, saude, ensino, eventos } = this.state;
    return(
      <div class="row">
        <div class="col">
          <img src={Anuncieimagem}width="500px"/>
        </div>
        <div class="col register-right">
          <h2>ANUNCIE-SE AQUI</h2>
          <div class="form-item">
            <label for="name">Nome:</label>
            <input id="name" type="text" class='' placeholder="Insira seu nome completo, conforme documento de identificação" onChange={this.handleChange.bind(this)} />
          </div>
          <div class="form-item">
            <label for="cpf">CPF:</label>
            <input id="cpf" type="text" class='' placeholder="Insira seu nome CPF" onChange={this.handleChange.bind(this)}/>
          </div>
          <div class="form-item">
            <label for="email">E-mail:</label>
            <input id="email" type="email" class='' placeholder="Insira seu e-mail mais utilizado" onChange={this.handleChange.bind(this)}/>
          </div>
          <div class="form-item">
            <label for="birthday">Data de Nascimento:</label>
            <input id="birthday" type="date" class='' required onChange={this.handleChange.bind(this)}/>
          </div>
          <div class="form-item">
            <label for="gender">Gênero:</label>
            <select id="gender" class='' required onChange={this.handleChange.bind(this)}>
              <option value="" selected disabled hidden>Selecione seu gênero</option>
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Prefiro não dizer</option>
            </select>
          </div>
          <div class="form-item">
            <label for="phone">Celular:</label>
            <input id="phone" type="text" class='' placeholder="Insira somente os números do seu celular, com ddd" onChange={this.handleChange.bind(this)} />
            <small class=''>*É obrigatório que este número tenha Whatsapp</small>
          </div>
          <div class="form-item">
            <label for="state">Estado:</label>
            <input id="state" type="text" class='' placeholder="Informe seu estado" onChange={this.handleChange.bind(this)}/>
          </div>
          <div class="form-item">
            <label for="city">Cidade:</label>
            <input id="city" type="text" class='' placeholder="Informe sua cidade" onChange={this.handleChange.bind(this)}/>
          </div>
          <div class="form-item">
            <label for="cep">CEP:</label>
            <input id="cep" type="text" class='' placeholder="Insira apenas os números do seu CEP" onChange={this.handleChange.bind(this)} />
          </div>
          <div class="form-item">
            <label for="address">Endereço:</label>
            <input id="address" type="text" class='' placeholder="Insira sua rua/avenida e número" onChange={this.handleChange.bind(this)} />
          </div>
          <div class="form-item">
            <label for="complement">Complemento:</label>
            <input id="complement" type="text" class='' placeholder="Insira o complemento. Caso não tenha, preencha com 'nenhum'" onChange={this.handleChange.bind(this)} />
          </div>
          <div class="form-item">
            <label for="cities">Local de Trabalho:</label>
              <div class="form-item">
                <Multiselect
                options={this.state.DropdownLocaldeTrabalho} // Options to display in the dropdown
                selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                onSelect={this.onSelect} // Function will trigger on select event
                onRemove={this.onRemove} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
                groupBy="category"
                closeOnSelect={false}
                showArrow={true}
                id="MultipleDropdown"
                style={this.style}
                selectionLimit={4}
                placeholder="Selecione todas as cidades onde você oferece seus serviços"
                />
              </div>
            {/* <select id="cities" class='' required onChange={this.handleChange.bind(this)}>
              <option value="" selected disabled hidden>Selecione todas as cidades onde você oferece seus serviços</option>
              {cidades && cidades.map((cidade, index) => (
                <option className={""} value={cidade.id}>
                  {cidade.name}
                </option>
              ))}
            </select> */}
          </div>
          <div class="form-item">
            <label for="services">Profissão:</label>
              <div class="form-item">
                <Multiselect
                options={this.state.DropdownProfissões} // Options to display in the dropdown
                selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                onSelect={this.onSelect} // Function will trigger on select event
                onRemove={this.onRemove} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
                groupBy="category"
                closeOnSelect={false}
                showArrow={true}
                id="MultipleDropdown"
                style={this.style}
                selectionLimit={4}
                placeholder="Selecione de 1 a 4 profissões"
                />
              </div>
            {/* <select id="services" class='' required onChange={this.handleChange.bind(this)}>
            <option value="" selected disabled hidden>Selecione a sua profissão</option>
            <optgroup label="Beleza">
              {beleza && beleza.map((servico, index) => (
                <option className={""} value={servico.id}>
                  {servico.name}
                </option>
              ))}
            </optgroup>           
            <optgroup label="Manutenção">
              {manutencao && manutencao.map((servico, index) => (
                <option className={""} value={servico.id}>
                  {servico.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Saúde">
              {saude && saude.map((servico, index) => (
                <option className={""} value={servico.id}>
                  {servico.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Ensino">
              {ensino && ensino.map((servico, index) => (
                <option className={""} value={servico.id}>
                  {servico.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Tecnologia">
              {tecnologia && tecnologia.map((servico, index) => (
                <option className={""} value={servico.id}>
                  {servico.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Eventos">
              {eventos && eventos.map((servico, index) => (
                <option className={""} value={servico.id}>
                  {servico.name}
                </option>
              ))}
            </optgroup>
            </select> */}
          </div>
          <div class="form-item">
            <label for="file">Foto de Perfil:</label>
            <input id="file" type="file" name="file" class="" onChange={this.handleChange.bind(this)} />
            <small class=''>*Insira uma foto que tenha fundo branco e mostre bem o seu rosto. Logotipos não são aceitos.</small>
          </div>
          <div class="form-item">
              <label class="label">Descrição do Serviço:</label>
              <div style={{textAlign: "center"}}>
                <textarea id="description" name="description" class="textarea-contact" rows="6" placeholder="Escreva uma descrição dos seus serviços, com o máximo de detalhes possível" onChange={this.handleChange.bind(this)}></textarea>
              </div>
            </div>
          <div class="form-item">
            <label for="w2w">Serviço exclusivo para mulheres?</label>
              <div class="form-item">
                <Multiselect
                options={this.state.DropdownW2W} // Options to display in the dropdown
                selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                onSelect={this.onSelect} // Function will trigger on select event
                onRemove={this.onRemove} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
                closeOnSelect={true}
                showArrow={true}
                id="MultipleDropdown"
                style={this.style}
                selectionLimit={1}
                placeholder="Selecione uma opção"
                />
              </div>
            {/* <select id="w2w" class='' required onChange={this.handleChange.bind(this)}>
              <option value="" selected disabled hidden>Selecione uma opção</option>
              <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select> */}
          </div>
          <div class="form-item">
            <div>
            <label class="container">
            <input type="checkbox"/>
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
