import App from './server/index';
import Interactor from './client/index';
import Database from './client/manager';
import Example from './example';

App.listen(2000); //your port
Interactor.login('TOKEN'); //your client's token
Database.set('magicalKey', 'guildID'); //loading a sample key, this is not a joke ;-;

//index.ts is our main file, we have imported our Application and the Client
//please refer to 'src/example/index.ts' for a better understanding of the code