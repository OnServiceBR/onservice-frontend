import React, { Component } from "react";
import PrestadorDataService from "../services/prestador.service";
import CidadeDataService from "../services/cidade.service";
import ServicoDataService from "../services/servico.service";

import "../styles/anuncie.css";

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      cpf: "",
      email: "",
      age: "",
      gender: "",
      phone: "",
      cep: "",
      city: "",
      address: "",
      complement: "",
      description: "",
      cidades: [],
      servicos: [],

      cities: [],
      services: [],
      picture: undefined,

      beleza: [],
      saude: [],
      manutencao: [],
      ensino: [],
      residencial: [],
      freelancer: []
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
    } else if (field === "age") {
      this.setState({ age: event.target.value });
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
    } else if (field === "picture") {
      this.setState({ picture: event.target.files });
    } else if (field === "description") {
      this.setState({ description: event.target.value });
    }
    console.log(this.state)
  }

  componentDidMount() {
    this.retrieveCidades();
    this.retrieveServicos();
  }

  savePrestador = () => {
    // console.log(this.state.name)
    var data = {
      name: this.state.name,
      cpf: this.state.cpf,
      email: this.state.email,
      age: this.state.age,
      gender: this.state.gender,
      phone: this.state.phone,
      cep: this.state.cep,
      city: this.state.city,
      address: this.state.address,
      complement: this.state.complement,
      cidades: this.state.cities,
      servicos: this.state.services,
      description: this.state.description
    };

    let currentFile = this.state.picture[0];

    PrestadorDataService.upload(currentFile)
      .then(res => {
        console.log("Imagem enviada");
      })
      .catch(e => {
        console.log(e);
      })

    PrestadorDataService.create(data)
      .then(res => {
        this.setState({
          id: res.data.id,
          name: res.data.name,
          cpf: res.data.cpf,
          email: res.data.email,
          age: res.data.age,
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
    ServicoDataService.getResidencial()
      .then(res => {
        this.setState({
          residencial: res.data
        });
        // console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
    ServicoDataService.getFreela()
      .then(res => {
        this.setState({
          freelancer: res.data
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
      age: "",
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

  render() {
    const { cidades, beleza, manutencao, saude, ensino, residencial, freelancer } = this.state;
    return(
      <div class="row">
        <div class="col">
          1 de 2
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
            <label for="email">Email:</label>
            <input id="email" type="email" class='' placeholder="Insira seu email mais utilizado" onChange={this.handleChange.bind(this)}/>
          </div>
          <div class="form-item">
            <label for="age">Data de Nascimento:</label>
            <input id="age" type="date" class='' required onChange={this.handleChange.bind(this)}/>
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
            <input id="phone" type="text" class='' placeholder="Insira seu número de celular" onChange={this.handleChange.bind(this)} />
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
            <label for="cities">Local de Trabalho:</label>
            <select id="cities" class='' required onChange={this.handleChange.bind(this)}>
              <option value="" selected disabled hidden>Selecione todas as cidades onde você oferece seus serviços</option>
              {cidades && cidades.map((cidade, index) => (
                <option className={""} value={cidade.id}>
                  {cidade.name}
                </option>
              ))}
            </select>
          </div>
          <div class="form-item">
            <label for="services">Profissão:</label>
            <select id="services" class='' required onChange={this.handleChange.bind(this)}>
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
            <optgroup label="Residencial">
              {residencial && residencial.map((servico, index) => (
                <option className={""} value={servico.id}>
                  {servico.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Freelancer">
              {freelancer && freelancer.map((servico, index) => (
                <option className={""} value={servico.id}>
                  {servico.name}
                </option>
              ))}
            </optgroup>
            </select>
          </div>
          <div class="form-item">
            <label for="picture">Foto de Perfil:</label>
            <input id="picture" type="file" name="file" class="" onChange={this.handleChange.bind(this)} />
            <small class=''>*Insira uma foto que tenha fundo branco e mostre bem o seu rosto. Logotipos não são aceitos.</small>
          </div>
          <div class="form-item">
            <label for="w2w">Serviço exclusivo para mulheres ?</label>
            <select id="w2w" class='' required>
              <option value="" selected disabled hidden>Selecione uma opção</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
          <button type='button' onClick={this.savePrestador.bind(this)} class='btn-primary'>Registre-se</button>
        </div>
      </div>
    )
  }
}
