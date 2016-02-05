var enzyme = require('enzyme')

var App = require('/components/app.jsx')


describe('<MyComponent />', () => {

  it('should render three <Foo /> components', () => {
    const wrapper = enzyme.shallow(<App />);
    expect(wrapper.find(Foo)).to.have.length(3);
  });

  it('should render an `.icon-star`', () => {
    const wrapper = enzyme.shallow(<MyComponent />);
    expect(wrapper.find('.icon-star')).to.have.length(1);
  });

  it('should render children when passed in', () => {
    const wrapper = enzyme.shallow(
      <MyComponent>
        <div className="unique" />
      </MyComponent>
    );
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

  it('simulates click events', () => {
    const wrapper = enzyme.shallow(
      <Foo onButtonClick={onButtonClick} />
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });

});