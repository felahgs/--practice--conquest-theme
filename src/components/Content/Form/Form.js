import React from 'react';

import './Form.css';

const form = () => {
    return (
        <div className="form-wrapper"> 
            <form>
                <div className="form-row">
                    <div className="form-left">
                        <input name="name" type="text" className="form-control" id="name" placeholder="Name"/>
                        <input type="email" name="email" className="form-control" id="mail" placeholder="Email"/>
                        <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject"/>
                    </div>
                    <div className="form-right">
                        <textarea name="message" rows="6" className="form-control" id="comment" placeholder="Your message here..."/>
                        <button type="submit" className="btn btn-default">Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default form;
