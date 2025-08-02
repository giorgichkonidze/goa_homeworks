const costumOrder = [
    {
        orderId: 101,
        isdelivered: true,
        items: [
            {title: 'Book A', prices: 17, quantity: 1},
            {title: 'Book B', prices: 16, quantity: 2}
        ]
    },
    {
        orderId: 102,
        isdelivered: false,
        items: [
            {title: 'Book C', prices: 10, quantity: 1},
            {title: 'Book D', prices: 35, quantity: 1}
        ]
    },
    {
        orderId: 103,
        isdelivered: true, 
        items: []
    }
]

// 1
const allorderHaveItems = costumOrder.every(order => order.items.length > 0)
console.log(allorderHaveItems)

// 2
const hasPendingDelivery = costumOrder.some(order => order.isdelivered === false)
console.log(hasPendingDelivery)

// 3
costumOrder.forEach(order => {
    console.log(`processing order id: ${order.orderId}`)

    // 4
    const allexpensive = order.items.every(item => item.price > 10)
    console.log(`order ${order.orderId}: ${allexpensive}`)

    // 5
    const hasMultipleCopies = order.items.some(items => items.quantity > 1)
    console.log(`order ${order.orderId}: ${hasMultipleCopies}`)
})