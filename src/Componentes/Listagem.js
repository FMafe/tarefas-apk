import React,{Component} from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
} from "react-native";



export default class Listagem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        textoBotaoSituacao: 'Finalizada',
        corTextoSituacao: 'red'
      }
      
    }

    Comprimento () {
      this.setState({situacao: 'Finalizada', textoBotaoSituacao: 'Finalizada', corTextoSituacao: 'blue'});
      this.props.Atualizar(this.props.id, 'Finalizada');
    }

    
    
        
      render() {
        return (
          <View>
            
            <View>
              <Text>Tarefa: {this.props.descricao} </Text>
              <Text>Data: {this.props.ano} </Text>
              <Text>Prioridade: {this.props.prioridade} </Text>
              <Text style={{color: this.state.corTextoSituacao}}>Situação: {this.props.situacao} </Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => this.Comprimento()}>
                <Text>Tarefa Finalizada</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.Remover(this.props.id)}>
                <Text>Remover Tarefa</Text>
              </TouchableOpacity>

            </View>
    
          </View>
        );
      }
}