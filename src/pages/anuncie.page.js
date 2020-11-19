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
    } else if (field === "description") {
      this.setState({ description: event.target.value });
    }
    // console.log(this.state)
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
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
    ServicoDataService.getManutencao()
      .then(res => {
        this.setState({
          manutencao: res.data
        });
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
    ServicoDataService.getSaude()
      .then(res => {
        this.setState({
          saude: res.data
        });
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
    ServicoDataService.getEnsino()
      .then(res => {
        this.setState({
          ensino: res.data
        });
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
    ServicoDataService.getResidencial()
      .then(res => {
        this.setState({
          residencial: res.data
        });
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
    ServicoDataService.getFreela()
      .then(res => {
        this.setState({
          freelancer: res.data
        });
        console.log(res.data);
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
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-5 register-left">
                <h3>Anuncie seu trabalho</h3>
                <p>Presta algum tipo de serviço? Anuncie já conosco e conquiste novos clientes de forma totalmente gratuita!</p>
              </div>
              <div class="col-md-7 register-right">
                <h2>Registre-se aqui</h2>
                <div class="register-form">
                  <div class="form-group">
                    <label for="">Nome</label>
                    <input id="name" type="text" class='form-control' placeholder="Insira seu nome completo" onChange={this.handleChange.bind(this)}/>
                  </div>
                  <div class="form-group">
                    <label for="">CPF</label>
                    <input id="cpf" type="text" class='form-control' placeholder="Insira seu nome completo" onChange={this.handleChange.bind(this)}/>
                  </div>
                  <div class="form-group">
                    <label for="">Email</label>
                    <input id="email" type="email" class='form-control' placeholder="Insira seu melhor email" onChange={this.handleChange.bind(this)}/>
                  </div>
                  <div class="form-group">
                    <label for="">Idade</label>
                    <input id="age" type="text" class='form-control' placeholder="Insira seu nome completo" onChange={this.handleChange.bind(this)}/>
                  </div>
                  <div class="form-group">
                    <label for="">Gênero</label>
                    <select id="gender" class='custom-select' required onChange={this.handleChange.bind(this)}>
                      <option>Selecione seu gênero</option>
                      <option>Masculino</option>
                      <option>Feminino</option>
                      <option>Prefiro não dizer</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="">Whatsapp</label>
                    <input id="phone" type="text" class='form-control' placeholder="Insira seu Whatsapp" onChange={this.handleChange.bind(this)} />
                    <small class='form-text text-muted'> É extremamente importante que o número informado tenha Whatsapp, para descomplicar ao máximo a relação contratante/contratado</small>
                  </div>
                  <div class="form-group">
                    <label for="">CEP</label>
                    <input id="cep" type="text" class='form-control' placeholder="Insira o CEP" onChange={this.handleChange.bind(this)} />
                    <small class='form-text text-muted'>Insira apenas os números do CEP</small>
                  </div>
                  <div class="form-group">
                    <label for="">Cidade</label>
                    <input id="city" type="text" class='form-control' placeholder="Insira a cidade de residência" onChange={this.handleChange.bind(this)}/>
                  </div>
                  <div class="form-group">
                    <label for="">Endereço</label>
                    <input id="address" type="text" class='form-control' placeholder="Insira o endereço" onChange={this.handleChange.bind(this)} />
                  </div>
                  <div class="form-group">
                    <label for="">Complemento</label>
                    <input id="complement" type="text" class='form-control' placeholder="Ex.: apto 123 ou casa 123" onChange={this.handleChange.bind(this)} />
                  </div>
                  <div class="form-group">
                    <label for="">Trabalho</label>
                    <select id="cities" class='custom-select' required onChange={this.handleChange.bind(this)}>
                      <option></option>
                      {cidades && cidades.map((cidade, index) => (
                        <option className={
                          "list-group-item "
                        }
                          value={cidade.id}
                        >
                          {cidade.name}
                        </option>
                      ))}
                    </select>
                    <small class='form-text text-muted'>Selecione quantas cidades forem necessárias</small>
                  </div>
                  <div class="form-group">
                    <label for="">Serviço</label>
                    <select id="services" class='custom-select' required onChange={this.handleChange.bind(this)}>
                    <option></option>
                    <optgroup label="Beleza">
                      {beleza && beleza.map((servico, index) => (
                        <option className={
                          "list-group-item "
                        }
                          value={servico.id}
                        >
                          {servico.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Manutenção">
                      {manutencao && manutencao.map((servico, index) => (
                        <option className={
                          "list-group-item "
                        }
                          value={servico.id}
                        >
                          {servico.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Saúde">
                      {saude && saude.map((servico, index) => (
                        <option className={
                          "list-group-item "
                        }
                          value={servico.id}
                        >
                          {servico.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Ensino">
                      {ensino && ensino.map((servico, index) => (
                        <option className={
                          "list-group-item "
                        }
                          value={servico.id}
                        >
                          {servico.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Residencial">
                      {residencial && residencial.map((servico, index) => (
                        <option className={
                          "list-group-item "
                        }
                          value={servico.id}
                        >
                          {servico.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Freelancer">
                      {freelancer && freelancer.map((servico, index) => (
                        <option className={
                          "list-group-item "
                        }
                          value={servico.id}
                        >
                          {servico.name}
                        </option>
                      ))}
                    </optgroup>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="">Foto de Perfil</label>
                    <input type="file" class="form-control" />
                    <small class='form-text text-muted'>Insira uma foto com fundo branco.</small>
                  </div>
                  <div class="form-group">
                    <label for="">Hora de trabalho</label>
                    <input type="text" class='form-control' placeholder="Preço por hora de serviço" />
                    <small class='form-text text-muted'>Insira um valor médio para sua hora de trabalho</small>
                  </div>
                  <div class="form-group">
                    <label for="">Serviço exclusivo para mulheres?</label>
                    <select id="w2w" class='custom-select' required>
                      <option value="">Selecione uma opção</option>
                      <option>Sim</option>
                      <option>Não</option>
                    </select>
                    <small class='form-text text-muted'> Um dos objetivos da OnService é fornecer segurança tanto para quem contrata quanto para quem irá ser contratado. Por isso, colocaremos os filtros de gêneros para que mulheres se sintam mais confortáveis ao prestarem um serviço.</small>
                  </div>
                  <button type='button' onClick={this.savePrestador.bind(this)} class='btn btn-primary'>Registre-se</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
