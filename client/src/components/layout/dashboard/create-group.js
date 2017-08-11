import React from 'react';
import { DashHeader, SideMenu } from '../../views';

class NewGroup extends React.Component {
  render() {
    return (
      <div>
        <DashHeader/>
        <main className="dashboard-ui">
          <div className="row">
			      <aside className="col s12 m3 l2">
              <SideMenu/>
            </aside>
            <section className="col s12 m9 l10">
			  <div className="dashboard-content">
                <div className="bot-msg">
                  <h3>Create a new group</h3>
                </div>
                <div className="features">
                  <form id="create-group-form">
                    <fieldset className="input-field">				
                      <input placeholder="Enter a group name" id="group_name" type="text" className="validate"/>						
                      <textarea placeholder="Enter group description" id="group-description" className="validate"/>
                    </fieldset>
					<button type="submit" className="btn btn-create">Submit</button>
				  </form>
                </div>
              </div>			
			</section>
          </div>
		  <small className="dashboard-copy">&copy;Bootcamp24, Andela Nigeria. All rights reserved.</small>
		</main>
      </div>
    );
  }
}

export default NewGroup;