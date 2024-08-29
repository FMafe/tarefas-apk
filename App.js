import React, { Component } from 'react';
import { 
  TextInput, 
  StyleSheet,
  View, 
  Text, 
  ScrollView,
  Picker,
  TouchableOpacity,
   } from 'react-native';

import Database from './src/Database/Database';
import Tarefas from './src/Models/Tarefas';
import Listagem from './src/Componentes/Listagem';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        descricao: '',
        ano: '',
        prioridade: '',
        situacao: 'Em comprimento...',
        lista: [],
    };
    this.Listar();
    
  

  }
    
  Inserir = (descricao, ano, prioridade, situacao) => {
    
    const novaTarefa = new Tarefas(descricao, ano, prioridade, situacao);
    const banco = new Database();
    banco.Inserir(novaTarefa)
    this.Listar();

  }
  
  Remover = (id) => {
    const banco = new Database();
    banco.Remover(id);
    this.Listar();
  }

  Atualizar = (id, situacao) =>{
    const banco = new Database();
    banco.Atualizar(id, situacao);
    this.Listar();
  }


 
  

  Listar = () => {
    const banco = new Database();
    banco.Listar().then(
      ListaBanco => {this.setState({ lista: ListaBanco })
      }
    )
  }
    
  render() {
    return (
      <View >
        <Text>Tarefa</Text>
          <TextInput onChangeText={(valor) => this.setState({descricao: valor})} placeholder="Digite sua tarefa" />
          <TextInput onChangeText={(valor) => this.setState({ano: valor})} placeholder="Digite a data da tarefa (DD-MM-AA)" />
          <TextInput onChangeText={(valor) => this.setState({prioridade: valor})} placeholder="Digite a prioridade (Alta/Media/Baixa)" />
          

          <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity onPress={() => this.Inserir(this.state.descricao, this.state.ano, this.state.prioridade, this.state.situacao)}>
                  <Text style={{backgroundColor: 'blue', color: 'white', whidth: 150, padding: 10, borderRadius: 10}}>Cadastrar Tarefa</Text>
              </TouchableOpacity>
              <Text />
          </View>
          <Text />
          <Text>Listagem de Tarefas</Text>

          {this.state.lista.map(l => (
            <Listagem
              l={l}
              id={l.id}
              descricao= {l.descricao}
              ano= {l.ano}
              prioridade= {l.prioridade}
              situacao= {l.situacao}
              Atualizar= {this.Atualizar}
              Remover= {this.Remover}
            />
          ))}
          

      </View>
    );
  }
}