import React, { Component } from 'react';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  onSubmit (todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      });
    }
  }

  deleteItem (id) {
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({ list: updatedlist });
  }

  updateName (input) {
    this.setState({ newItem: input });
  }
  render () {
    return (
      <div className="mainPage">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
              <div className="card card-signin flex-row my-5">
                <div className="card-img-left d-none d-md-flex">
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">Register</h5>
                  <form className="form-signin">
                    <div className="form-label-group">
                      <label>Email Address</label>
                      <input type="email" className="form-control" onChange={e => this.updateName(e.target.value)} placeholder="Enter email" />
                    </div>

                    <div className="form-label-group">
                      <label>Password</label>
                      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required autoComplete="on" />
                    </div>

                    <div className="form-label-group">
                      <label>Confirm password</label>
                      <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Password" required autoComplete="on" />

                    </div>
                    <button type="submit" onClick={() => this.onSubmit(this.state.newItem)}>Submit</button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>


        <ul>
          {this.state.list.map(item => {
            return (

              <li key={item.id}>
                <input className="checkboxTable" type="checkbox" onChange={() => { }} />
                {item.value}
                <span className="glyphicon glyphicon-trash" onClick={() => this.deleteItem(item.id)}></span>
              </li>

            )
          })}
        </ul>
      </div >
    );
  }
}
export default Main