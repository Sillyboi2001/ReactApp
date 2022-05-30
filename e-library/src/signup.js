import './App.css'

const Signup = () => {
    return (
        <div className="App">
            <div class="header">
               <header>E-LIBRARY</header>
            </div>
            <div class="form">
                <form>
                   <h2>Sign up</h2>
                <div class="input-box">
                   <i class="fa fa-user" aria-hidden="true"></i>
                   <input type="text" name="" placeholder="Username"/>
                </div>
                <div class="input-box">
                   <i class="fas fa-envelope" aria-hidden="true"></i>
                   <input type="email" name="" placeholder="Email"/>
                </div>
                <div class="input-box">
                   <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                   <input type="password" name="" placeholder="Password"/>
                </div>
                <div class="input-box">
                   <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                   <input type="password" name="" placeholder="Confirm Password"/>
                </div>
                <div class="input-box">
                   <input type="submit" name="" value="Signup"/>
                </div>
                </form>
            </div>
        </div>
    )
}
export default Signup;