import React from 'react';


const Layout = (props: any) => {

    const { children } = props;
    return (
        <>
            <nav className="navbar navbar-light background">
                <div className="offset-2 col-8">
                    <span className="navbar-brand">Love Chuck Norris</span>
                </div>
            </nav>
            <div className="container">
                <div className="row p-3 " >
                    <div className="offset-1 col-10">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Layout;