import moment from "moment";
import Currency from "react-currency-formatter";
import Image from "next/image";

function Order(order) {
  // console.log(order);
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div className="mx-2">
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{moment.unix(order.timestamp).format("DD MMM YYYY")}</p>
        </div>
        <div className="mx-2">
          <p className="text-xs font-bold">TOTAL AMOUNT</p>
          <p>
            <Currency quantity={order.amount * 75} currency="INR" /> - Next-day
            Delivery{" "}
            <Currency quantity={order.amountShipping * 75} currency="INR" />
          </p>
        </div>
        <div className="mx-2">
          <p className="text-xs font-bold"># OF ITEMS</p>
          <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
            {order.items.length} items
          </p>
        </div>
        <p className="sm:hidden absolute top-2 right-2 truncate text-xs whitespace-nowrap">
          ORDER: {order.id}
        </p>
      </div>
      <div className="p-5 sm:p-10 ">
        <div className="flex space-x-6 overflow-x-auto">
          {order.images.map((image, i) => {
            return (
              <img
                className="h-20 w-20 object-contain"
                key={i}
                src={image}
                alt="items"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Order;
