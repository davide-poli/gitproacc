document.addEventListener('DOMContentLoaded', function () {
	//^ Creation and handling of stepper
	const stepper = new Stepper(document.querySelector('.bs-stepper'), {
		linear: true,
		animation: true,
	});
	const btnsNext = document.querySelectorAll(`.btn.next`);
	const btnsPrev = document.querySelectorAll(`.btn.prev`);

	btnsNext.forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault();
			stepper.next();
		});
	});

	btnsPrev.forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault();
			stepper.previous();
		});
	});
});
