const db = require('./models')
db.connect()

const huntersCRUD = async () => {
  try{
// // CREATE
    const newHunter = await new db.Hunter({
      name: 'terryTime',
      wantedFor: 'finishing the assignment before its even conceived',
      client: 'Weston',
      reward: 10,
      ship: 'bouldertime',
      hunters: ['George', 'Grant', 'Benji'],
      captured: false
    })

    await newHunter.save()

    console.log('new Hunter: ', newHunter)
// // READ

//     const foundDrink = await db.Drink.findOne({
//       name: 'Chocolate Milk'
//     })

//     console.log('Found Drink: ', foundDrink)
// // UPDATE
//     foundDrink.name = 'Choco Milk'
//     await foundDrink.save()

//     console.log('updated drink: ', foundDrink)

// // DESTROY
//       const deletedDrink = await db.Drink.deleteOne({
//         name: 'Choco Milk'
//       })

//       console.log('deleted drink: ', deletedDrink)

      } catch (err) {
        console.log(err)
      }
}



huntersCRUD()