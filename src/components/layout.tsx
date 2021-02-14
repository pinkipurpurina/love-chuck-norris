import React from 'react';


const Layout = (props: any) => {

    const { children } = props;
    return (
        <>
            <nav className="navbar navbar-light background">
                <div className="offset-3 col-6">
                    <span className="navbar-brand">CRUD</span>
                </div>

            </nav>
            <div className="container">
                <div className="row p-3 " >
                    <div className="offset-3 col-6">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )


}
export default Layout;