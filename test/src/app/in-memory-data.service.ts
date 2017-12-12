import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    
    const heroes = [
      { id: 11, name: 'Mr. Nice' , address: '123 Quang Trung', phone: '0926789465', email: 'a@gmail.com'},
      { id: 12, name: 'Narco', address: '111 Quang Trung', phone: '0926789469', email: 'b@gmail.com' },
      { id: 13, name: 'Bombasto', address: '122 Quang Trung', phone: '0926789462', email: 'c@gmail.com' },
      { id: 14, name: 'Celeritas', address: '12 Quang Trung', phone: '0966789465', email: 'd@gmail.com' },
      { id: 15, name: 'Magneta', address: '1 Quang Trung', phone: '0926789565', email: 'e@gmail.com' },
      { id: 16, name: 'RubberMan', address: '4 Quang Trung', phone: '0926789965', email: 'f@gmail.com' },
      { id: 17, name: 'Dynama', address: '8 Quang Trung', phone: '0926789468', email: 'g@gmail.com' },
      { id: 18, name: 'Dr IQ', address: '18 Quang Trung', phone: '0926789418', email: 'h@gmail.com' },
      { id: 19, name: 'Magma', address: '19 Quang Trung', phone: '0926789419', email: 'i@gmail.com' },
      { id: 20, name: 'Tornado', address: '20 Quang Trung', phone: '0926789420', email: 'j@gmail.com' }
    ];
    return {heroes};
  }
}
