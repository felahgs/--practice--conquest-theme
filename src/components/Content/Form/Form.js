import React from 'react';

import './Form.css';

const form = () => {
    return (
        <div className="form-wrapper"> 
            <form>
                <div className="form-row">
                    <div className="form-left">
                        <input name="name" type="text" class="form-control" id="name" placeholder="Name"/>
                        <input type="email" name="email" class="form-control" id="mail" placeholder="Email"/>
                        <input name="subject" type="text" class="form-control" id="subject" placeholder="Subject"/>
                    </div>
                    <div className="form-right">
                        <textarea name="message" rows="6" class="form-control" id="comment" placeholder="Your message here..."/>
                        <button type="submit" class="btn btn-default">Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default form;
