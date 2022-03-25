function HeaderComponent() {   
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 <a href="https://github.com/allcodesnick" className="navbar-brand" target="_blank"rel="noreferrer" >My Github</a>
                 <div> 
                     <ul className="nav justify-content-end">
                         <li className="nav-item active">
                             <a className="nav-item nav-link" href="/">Home</a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-item nav-link" href="/services">Services</a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-item nav-link" href="/resume">Resume/CV</a>
                         </li>
                     </ul>
                 </div>
             </nav>
        </div>
     );
}

export default HeaderComponent;