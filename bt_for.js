var man =
[
	{
		id: 1,
		name:"The cosmo (Đen) quần short kaki",
		code:"QSKK3622",
		price:"250.000đ",
		image:"https://aoxuanhe.com/upload/product/axh-182/ao-so-mi-denim-nam-cao-cap.jpg"
	},
	{
		id: 2,
		name:"Quần baggy đen sang trọng QQ",
		code:"QBGST34598342",
		price:"398.000đ",
		image:"https://hidanz.com/wp-content/uploads/2021/09/ao-so-mi-nam-han-quoc7.jpg"
	},
	{
		id: 3,
		name:"The cosmo (Đen) quần short kaki",
		code:"QSKK3622",
		price:"300.000đ",
		image:"https://laforce.vn/wp-content/uploads/2022/07/phoi-do-voi-ao-so-mi-nam.jpg"
	},
	{
		id: 4,
		name:"The cosmo (Đen) quần short kaki",
		code:"QSKK3622",
		price:"450.000đ",
		image:"https://cf.shopee.vn/file/3e89b935beda78edef81f14e327f47fe"
	}
]
var woment =
[
	{
		id: 2,
		name:"Đầm tiểu thư đỏ nơ đen",
		code:"AKKKDR8732",
		price:"230.000đ",
		image:"http://thoitrangskinny.com/upload/O1CN01k4qU5Y1jZu1ozP8Ql_!!2383864563-0-cib_-26-10-2022-13-42-31.jpg"
	},
	{
		id: 1,
		name:"Đầm sơ mi phối váy đen",
		code:"DFWM4753622",
		price:"490.000đ",
		image:"http://thoitrangskinny.com/upload/O1CN01zazhUX1jZtyyMw69T_!!2383864563-0-cib_-06-03-2022-10-55-44.jpg"
	},
	{
		id: 3,
		name:"Đầm tiểu thư cổ sơ mi kẻ cara",
		code:"ATCVUT743622",
		price:"250.000đ",
		image:"http://thoitrangskinny.com/upload/O1CN01AtlBqx1jZtz7uHOZD_!!2383864563-0-cib_-06-03-2022-10-48-15.jpg"
	},
	{
		id: 4,
		name:"Đầm yếm đen cổ sơ mi",
		code:"CVSTFH3622",
		price:"250.000đ",
		image:"http://thoitrangskinny.com/upload/O1CN01WSPmuK1jZtzwcDN0F_!!2383864563-0-cib_-10-05-2022-12-12-57.jpg"
	}
]
function listProduct(){
	for (let i=0; i<=man.length-1; i++){
		var demo = '<div class = "col-3">';
		demo += '<div class = "card" style ="width: 18rem;">';
		demo += '<img src = "'+ man[i].image+'"class = card-img-top" style = height = "400px">';
		demo += '<div class = "card-body">';
		demo += '<h5 class = "card-title">'+man[i].name+'</h5>';
		demo += '<p class = "card-text">'+ man[i].price+ '</p>';
		demo += '<a href = "#" class = "btn btn-primary onclick="Oder()">Đặt Mua</a>';
		demo += '</div>';
		demo += '</div>';
		demo += '</div>';
		console.log(demo);
		document.getElementById("men").innerHTML += demo;
	}
	for (let i=0; i<=woment.length-1; i++){
		var demo = '<div class = "col-3">';
		demo += '<div class = "card" style ="width: 18rem;">';
		demo += '<img src = "'+ woment[i].image+'"class = card-img-top" style = height = "400px">';
		demo += '<div class = "card-body">';
		demo += '<h5 class = "card-title">'+woment[i].name+'</h5>';
		demo += '<p class = "card-text">'+ woment[i].price+ '</p>';
		demo += '<a href = "#" class = "btn btn-primary onclick="Oder()">Đặt Mua</a>';
		demo += '</div>';
		demo += '</div>';
		demo += '</div>';
		console.log(demo);
		document.getElementById("woment").innerHTML += demo;
	}
}
function Oder(){
	alert("Thank you your order");
}