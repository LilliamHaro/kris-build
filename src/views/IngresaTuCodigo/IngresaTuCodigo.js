import React, { Component } from "react";
import "./IngresaTuCodigo.css";
import krisClaro from "../../assets/kris-claro.png";
import tituloIngresaTuCodigo from "../../assets/titulo-ingresa-tu-codigo.png";
import axios, { post } from "axios";

class IngresaTuCodigo extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      file: "",
      email: "",
      showing: true,
      showing2: false,
      showing3: false,

    };
    this.typingt = this.typing.bind(this);
    this.fileSelect = this.fileSelect.bind(this);
  }

  typing = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  fileSelect = e => {
    if (e.target.files.length !== 0) {
      var file = e.target.files[0];
      var pattern = /image-*/;
      var reader = new FileReader();

      if (!file.type.match(pattern)) {
        alert("Formato inválido");
        return;
      }

      reader.readAsDataURL(file);

      reader.onload = e => {
        this.setState({
          file: reader.result
        });
      };
    }
  };

  sendFormData = e => {
    e.preventDefault();
    const url = "https://www.circuit.com.pe/api/";
    const formData = { name: this.state.name, file: this.state.file };
    var headers = {
      "Content-Type": "text/plain"
    };

    axios
      .post(url, formData, { headers: headers })
      .then(res => {
        if (res.data.code === 200) {
          this.setState({ showing: false });
          this.setState({ showing2: true });
          console.log(res);
        } else {
          console.log("ok but not 200");
        }
      })
      .catch(error => console.log("error", error));
  };
  sendImage = e => {
    e.preventDefault();
    const url = "https://www.circuit.com.pe/api/";
    const formData = { name: this.state.name, file: this.state.file };
    var headers = {
      "Content-Type": "text/plain"
    };

    axios
      .post(url, formData, { headers: headers })
      .then(res => {
        if (res.data.code === 200) {
          this.setState({ showing2: false });
          this.setState({ showing3: true });
          console.log(res);
        } else {
          console.log("ok but not 200");
        }
      })
      .catch(error => console.log("error", error));
  };

  render() {
    const { showing } = this.state;
    const { showing2 } = this.state;
    const { showing3 } = this.state;

    return (
      <div className="ingresaTuCodigo">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="flex-box">
                {showing ? (
                  <form>
                    <div className="title">
                      <figure>
                        <img src={krisClaro} alt="kris-claro" />
                        <img src={tituloIngresaTuCodigo} alt="kris-claro" />
                      </figure>
                    </div>
                    <div className="input">
                      <input
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.typing}
                        type="text"
                      />
                    </div>
                    <div />
                    <div className="button">
                      <button
                        id="send-code"
                        onClick={this.sendFormData}
                        className="send-code"
                        type="submit"
                      >
                        siguiente
                      </button>
                    </div>
                  </form>
                ) : null}

                {showing2 ? (
                  <form>
                    <div className="title">
                      <figure>
                        <img src={krisClaro} alt="kris-claro" />
                        <img src={tituloIngresaTuCodigo} alt="kris-claro" />
                      </figure>
                    </div>
                    <div className="input">
                      <input
                        placeholder="Image"
                        name="file"
                        onChange={this.fileSelect}
                        type="file"
                      />
                    </div>
                    <div />
                    <div className="button">
                      <button
                        id="send-image"
                        onClick={this.sendImage}
                        className="send-code"
                        type="submit"
                      >
                        último
                      </button>
                    </div>
                  </form>
                ) : null}
                 {showing3 ? (
                 <div>Envio Exitoso :E</div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IngresaTuCodigo;
