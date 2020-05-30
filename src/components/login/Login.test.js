import React from 'react';
import { mount, shallow } from 'enzyme';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';

describe('Snapshot component', () => {
  describe('Login', () => {
    const props = {
      signIn: jest.fn(),
    };

    it('should test snapshot', () => {
      const wrapper = shallow(<Login {...props} />);
      expect(wrapper).toMatchSnapshot();
    });

    const username = 'testuser';
    const password = 'testpass';

    it('Should perform a signIn action', () => {
      const wrapper = mount(
        <MemoryRouter>
          <Login {...props} />
        </MemoryRouter>
      );

      const form = wrapper.find('form');
      const usernameInput = wrapper.find('input').at(0);
      const passwordInput = wrapper.find('input').at(1);

      usernameInput.instance().value = username;
      passwordInput.instance().value = password;

      usernameInput.simulate('change');
      passwordInput.simulate('change');

      form.simulate('submit');
      expect(props.signIn).toHaveBeenCalledWith({
        username,
        password,
      });
    });
  });
});
