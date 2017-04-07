function onHomeChanged(system) {
	numberValidation(system);
	calcHomeTotalPctDamaged();
}

function onMobileChanged(system) {
	numberValidation(system);
	calcMobileTotalPctDamaged();
}

function calcHomeTotalPctDamaged() {
   	var foundation_home = document.getElementById("foundation_home").value;
	var floor_frame_home = document.getElementById("floor_frame_home").value;
	var exterior_walls_home = document.getElementById("exterior_walls_home").value;
	var roof_home = document.getElementById("roof_home").value;
	var interior_walls_home = document.getElementById("interior_walls_home").value;
	var plumbing_home = document.getElementById("plumbing_home").value;
	var heating_ac_home = document.getElementById("heating_ac_home").value;
	var electrical_home = document.getElementById("electrical_home").value;

	var home_total_pct_damaged = parseInt(foundation_home) + parseInt(floor_frame_home) + parseInt(exterior_walls_home) + parseInt(roof_home) + parseInt(interior_walls_home) + parseInt(plumbing_home) + parseInt(heating_ac_home) + parseInt(electrical_home);

	document.getElementById("home_total_pct_damaged").innerHTML = home_total_pct_damaged;
}

function calcMobileTotalPctDamaged() {
	var floor_frame_mobile = document.getElementById("floor_frame_mobile").value;
	var exterior_walls_mobile = document.getElementById("exterior_walls_mobile").value;
	var roof_mobile = document.getElementById("roof_mobile").value;
	var interior_walls_mobile = document.getElementById("interior_walls_mobile").value;

	var mobile_total_pct_damaged = parseInt(floor_frame_mobile) + parseInt(exterior_walls_mobile) + parseInt(roof_mobile) + parseInt(interior_walls_mobile);

	document.getElementById("mobile_total_pct_damaged").innerHTML = mobile_total_pct_damaged;
}

function homeOrMobile(choice) {
	if (choice === "Home") {
		document.getElementById("floor_frame_mobile").setAttribute("disabled", "true");
		document.getElementById("exterior_walls_mobile").setAttribute("disabled", "true");
		document.getElementById("roof_mobile").setAttribute("disabled", "true");
		document.getElementById("interior_walls_mobile").setAttribute("disabled", "true");

		document.getElementById("foundation_home").removeAttribute("disabled");
		document.getElementById("floor_frame_home").removeAttribute("disabled");
		document.getElementById("exterior_walls_home").removeAttribute("disabled");
		document.getElementById("roof_home").removeAttribute("disabled");
		document.getElementById("interior_walls_home").removeAttribute("disabled");
		document.getElementById("plumbing_home").removeAttribute("disabled");
		document.getElementById("heating_ac_home").removeAttribute("disabled");
		document.getElementById("electrical_home").removeAttribute("disabled");
	} else {
		document.getElementById("foundation_home").setAttribute("disabled", "true");
		document.getElementById("floor_frame_home").setAttribute("disabled", "true");
		document.getElementById("exterior_walls_home").setAttribute("disabled", "true");
		document.getElementById("roof_home").setAttribute("disabled", "true");
		document.getElementById("interior_walls_home").setAttribute("disabled", "true");
		document.getElementById("plumbing_home").setAttribute("disabled", "true");
		document.getElementById("heating_ac_home").setAttribute("disabled", "true");
		document.getElementById("electrical_home").setAttribute("disabled", "true");

		document.getElementById("floor_frame_mobile").removeAttribute("disabled");
		document.getElementById("exterior_walls_mobile").removeAttribute("disabled");
		document.getElementById("roof_mobile").removeAttribute("disabled");
		document.getElementById("interior_walls_mobile").removeAttribute("disabled");
	}
}

function numberValidation(system) {
	var value = parseInt(document.getElementById(system).value);
	var max = parseInt(document.getElementById(system).max);
	var min = parseInt(document.getElementById(system).min);
	if (value > max) {
		document.getElementById(system).value = max;
	}
	if (value < min) {
		document.getElementById(system).value = min;
	}
}