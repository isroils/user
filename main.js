const users = {
    1: {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            companyName: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
        }
    },
    2: {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618"
            }
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            companyName: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
        }
    },
    3: {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
                lat: "-68.6102",
                lng: "-47.0653"
            }
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
            companyName: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
        }
    }
}
function objUsers(obj) {
    let { id, name, username, email, address: { street, suite, city, zipcode, geo: { lat, lng } }, phone, website, company: { companyName, catchPhrase } } = obj,
        userId = `Foydalnuvchi id raqami; ${id}\n`,
        userName1 = `Foydalanuvchi ismi: ${name}\n`,
        userName2 = `Foydalnuvchi tahallusi: ${username}\n`,
        useremail = `Foydalanuvchi email pochtasi: ${email}\n`,
        useraddress = `Manzil:\nKo'cha: ${street}\nShahar: ${city}\nPo'chta raqami: ${zipcode}\nGeo manzili:\nlat: ${lat}\nlng: ${lng}\nTelefon raqami: ${phone}\nWeb Sayt: ${website}\nKampaniya:\nKampaniya nomi: ${companyName}\ncatchPhrase: ${catchPhrase}`
    userInfo = `${userId}${userName1}${userName2}${useremail}${useraddress}`
    return userInfo
}
for (const key in users) {
    alert(objUsers(users[key]));
}
