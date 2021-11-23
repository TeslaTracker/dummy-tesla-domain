import './app.scss';

(window as any).tesla = {
  date: 123456789,
  DSServices: {
    base_url: 'https://www.tesla.com',
    configurator_url: 'https://www.tesla.com/model3/design',
    cr_enabled: false,
    cr_ip_check_enabled: false,
    KeyManager: {},
  },
  debug: null,
  base_url: 'https://www.tesla.com',
  configurator_url: 'https://www.tesla.com/model3/design',
  cr_enabled: false,
  cr_ip_check_enabled: false,
};
function App() {
  return (
    <div className="app">
      <h1>Tesla Website Dummy</h1>
    </div>
  );
}

export default App;
