import SQLite from 'react-native-sqlite-storage';
import {Chatt_User1, Chatt_User2} from '../../constant/DataChatt';
import {Panggilan_User1, Panggilan_User2} from '../../constant/DataPanggilan';
import {Status_User1, Status_User2} from '../../constant/DataStatus';

const userList = [
  {
    name: 'user',
    username: 'user1@gmail.com',
    password: 'pass1#',
    image:
      'https://ichef.bbci.co.uk/news/507/cpsprodpb/AA0E/production/_119543534_animedua.jpg',
    role: 'user1',
    phone: '+628512312344',
  },
  {
    name: 'user',
    username: 'user2@gmail.com',
    password: 'users2#',
    image: 'https://wayang.files.wordpress.com/2010/03/ramayana.jpg',
    role: 'user2',
    phone: '+628996712312',
  },
];

class SQLite3 {
  constructor() {
    SQLite.DEBUG(true);
    SQLite.enablePromise(true);

    const database_name = 'WhatsAppKw.db';
    const database_version = '1.0';
    const database_displayname = 'SQLite React Offline Database';
    const database_size = 200000;

    this.conn = null;
    SQLite.openDatabase(
      database_name,
      database_version,
      database_displayname,
      database_size,
    )
      .then(tx => {
        this.conn = tx;
        console.log('tx:', tx);
        // this.createTableUsers(tx);
        // this.createTableChats(tx);
        // this.createTableCalls(tx);
        // this.createTableStatus(tx);

        // tx.executeSql('DROP TABLE users');
        // tx.executeSql('DROP TABLE chats_user1');
        // tx.executeSql('DROP TABLE chats_user2');
        // tx.executeSql('DROP TABLE calls_user1');
        // tx.executeSql('DROP TABLE calls_user2');
        // tx.executeSql('DROP TABLE status_user1');
        // tx.executeSql('DROP TABLE status_user2');
      })
      .catch(err => console.error('SQLite Error:', err));
  }

  createTableUsers = tx => {
    tx.executeSql(
      `create table if not exists users(
            id INTEGER PRIMARY KEY NOT NULL,
            name TEXT, 
            username TEXT,
            password TEXT,
            role TEXT,
            image TEXT,
            phone TEXT)`,
    )
      .then(() => {
        console.log('in');
        tx.executeSql(
          `INSERT INTO users (
                    name,
                    username,
                    password,
                    role,
                    image,
                    phone
                )
                VALUES
                    (
                        '${userList[0].name}',
                        '${userList[0].username}',
                        '${userList[0].password}',
                        '${userList[0].role}',
                        '${userList[0].image}',
                        '${userList[0].phone}'
                    ),
                    (
                        '${userList[1].name}',
                        '${userList[1].username}',
                        '${userList[1].password}',
                        '${userList[1].role}',
                        '${userList[1].image}',
                        '${userList[1].phone}'
                    )
                    `,
        )
          .then(() => console.info('Successfuly insert users!'))
          .catch(err => console.warn('Failed insert users!!', err))
          .finally(() => console.log('Finally insert!!'));
      })
      .catch(err => console.log('err table'));
  };

  createTableChats = tx => {
    tx.executeSql(
      `create table if not exists chats_user1(
            id INTEGER PRIMARY KEY NOT NULL,
            name TEXT, 
            image TEXT,
            time TEXT,
            message TEXT,
            icon TEXT,
            messageType TEXT)`,
    )
      .then(() => {
        console.log('finally');
        tx.executeSql(
          `INSERT INTO chats_user1 (
                    name,
                    image,
                    time,
                    message,
                    icon,
                    messageType
                )
                VALUES
                    ${Chatt_User1.map((data, index) => {
                      return `(
                            '${data.name}',
                            '${data.image}',
                            '${data.time}',
                            '${data.message}',
                            '${data.icon}',
                            '${data.messageType}'
                        )`;
                    })}
                    `,
        )
          .then(() => console.info('Successfuly insert chat user1!'))
          .catch(err => console.warn('Failed insert chat user1!!', err))
          .finally(() => console.log('Finally insert!!'));
      })
      .catch(err => console.log('err table'));

    tx.executeSql(
      `create table if not exists chats_user2(
                id INTEGER PRIMARY KEY NOT NULL,
                name TEXT, 
                image TEXT,
                time TEXT,
                message TEXT,
                icon TEXT,
                messageType TEXT)`,
    )
      .then(() => {
        console.log('finally');
        tx.executeSql(
          `INSERT INTO chats_user2 (
                        name,
                        image,
                        time,
                        message,
                        icon,
                        messageType
                    )
                    VALUES
                        ${Chatt_User2.map((data, index) => {
                          return `(
                                '${data.name}',
                                '${data.image}',
                                '${data.time}',
                                '${data.message}',
                                '${data.icon}',
                                '${data.messageType}'
                            )`;
                        })}
                        `,
        )
          .then(() => console.info('Successfuly insert chat user2!'))
          .catch(err => console.warn('Failed insert chat user2!!', err))
          .finally(() => console.log('Finally insert!!'));
      })
      .catch(err => console.log('err table'));
  };

  createTableCalls = tx => {
    tx.executeSql(
      `create table if not exists calls_user1(
            id INTEGER PRIMARY KEY NOT NULL,
            name TEXT, 
            image TEXT,
            date TEXT,
            time TEXT,
            callType TEXT,
            call TEXT)`,
    )
      .then(() => {
        console.log('finally');
        tx.executeSql(
          `INSERT INTO calls_user1 (
                    name,
                    image,
                    date,
                    time,
                    callType,
                    call
                )
                VALUES
                    ${Panggilan_User1.map((data, index) => {
                      return `(
                            '${data.name}',
                            '${data.image}',
                            '${data.date}',
                            '${data.time}',
                            '${data.callType}',
                            '${data.call}'
                        )`;
                    })}
                    `,
        )
          .then(() => console.info('Successfuly insert call user1!'))
          .catch(err => console.warn('Failed insert call user1!!', err))
          .finally(() => console.log('Finally insert!!'));
      })
      .catch(err => console.log('err table'));

    tx.executeSql(
      `create table if not exists calls_user2(
            id INTEGER PRIMARY KEY NOT NULL,
            name TEXT, 
            image TEXT,
            date TEXT,
            time TEXT,
            callType TEXT,
            call TEXT)`,
    )
      .then(() => {
        console.log('finally');
        tx.executeSql(
          `INSERT INTO calls_user2 (
                    name,
                    image,
                    date,
                    time,
                    callType,
                    call
                )
                VALUES
                    ${Panggilan_User2.map((data, index) => {
                      return `(
                            '${data.name}',
                            '${data.image}',
                            '${data.date}',
                            '${data.time}',
                            '${data.callType}',
                            '${data.call}'
                        )`;
                    })}
                    `,
        )
          .then(() => console.info('Successfuly insert call user2!'))
          .catch(err => console.warn('Failed insert call user2!!', err))
          .finally(() => console.log('Finally insert!!'));
      })
      .catch(err => console.log('err table'));
  };

  createTableStatus = tx => {
    tx.executeSql(
      `create table if not exists status_user1(
            id INTEGER PRIMARY KEY NOT NULL,
            name TEXT, 
            image TEXT,
            date TEXT,
            time TEXT)`,
    )
      .then(() => {
        console.log('finally');
        tx.executeSql(
          `INSERT INTO status_user1 (
                    name,
                    image,
                    date,
                    time
                )
                VALUES
                    ${Status_User1.map((data, index) => {
                      return `(
                            '${data.name}',
                            '${data.image}',
                            '${data.date}',
                            '${data.time}'
                        )`;
                    })}
                    `,
        )
          .then(() => console.info('Successfuly insert status user1!'))
          .catch(err => console.warn('Failed insert status user1!!', err))
          .finally(() => console.log('Finally insert!!'));
      })
      .catch(err => console.log('err table'));

    tx.executeSql(
      `create table if not exists status_user2(
            id INTEGER PRIMARY KEY NOT NULL,
            name TEXT, 
            image TEXT,
            date TEXT,
            time TEXT)`,
    )
      .then(() => {
        console.log('finally');
        tx.executeSql(
          `INSERT INTO status_user2 (
                    name,
                    image,
                    date,
                    time
                )
                VALUES
                    ${Status_User2.map((data, index) => {
                      return `(
                            '${data.name}',
                            '${data.image}',
                            '${data.date}',
                            '${data.time}'
                        )`;
                    })}
                    `,
        )
          .then(() => console.info('Successfuly insert status user2!'))
          .catch(err => console.warn('Failed insert status user2!!', err))
          .finally(() => console.log('Finally insert!!'));
      })
      .catch(err => console.log('err table'));
  };

  getAllUsers = query => {
    return new Promise(resolve => {
      const userList = [];
      this.conn
        .transaction(tx => {
          tx.executeSql(query)
            .then(results => {
              console.log('Query completed');
              const len = results[1].rows.length;
              for (let i = 0; i < len; i++) {
                const row = results[1].rows.item(i);
                userList.push(row);
              }
              resolve(userList);
            })
            .catch(err => {
              console.log('error executesql', err);
            });
        })
        .catch(err => {
          console.log('error transaction', err);
        });
    });
    // const userList = []
    // this.conn.executeSql("select * from users")
    // .then(result => {
    //     const rows = result[0].rows
    //     for (let index = 0; index < rows.length; index++) {
    //             const row = rows.item(index);
    //             userList.push(row)
    //             // console.log(`row ${index + 1}:`, row);
    //     }
    // })
    // return userList
  };

  runQuery = (query, params = []) => this.conn.executeSql(query, params);
}

export default SQLite3;
