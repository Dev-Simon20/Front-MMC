import Typography from '@mui/material/Typography';
// import { useRef,useState,useEffect,useCallback,memo } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

/**
 * FuseCountdown
 * A React component used to display the number of days, hours, minutes and seconds left until a specified end date.
 * It allows a callback function to be passed in to be executed when the end date is reached.
 */
  
function FuseCountdown(props) {
	// debugger;
    const fechasd = new Date(props.endDate);
    const obj={
        endDate:fechasd
    }
	const { onComplete, endDate = moment().add(15, 'days'), className } = obj;
	const [endDateVal] = useState(moment.isMoment(endDate) ? endDate : moment(endDate));
	const [countdown, setCountdown] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});
	const intervalRef = useRef(null);
	const complete = useCallback(() => {
		if (intervalRef.current) {
			window.clearInterval(intervalRef.current);
		}

		if (onComplete) {
			onComplete();
		}
	}, [onComplete]);
	const tick = useCallback(() => {
		const currDate = moment();
		const diff = endDateVal.diff(currDate, 'seconds');

		if (diff < 0) {
			complete();
			return;
		}

		const timeLeft = moment.duration(diff, 'seconds');
		setCountdown({
			days: Number(timeLeft.asDays().toFixed(0)),
			hours: timeLeft.hours(),
			minutes: timeLeft.minutes(),
			seconds: timeLeft.seconds()
		});
	}, [complete, endDateVal]);
	useEffect(() => {
		intervalRef.current = window.setInterval(tick, 1000);
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [tick]);
	return (
		<div style={{display:'flex',width:'100%',justifyContent:'space-evenly',color:'#441f4a'}}>
			<div className="flex flex-col items-center justify-center px-12">
				<Typography
					variant="h4"
					className="mb-4"
                    fontFamily='sansita'
				>
					{countdown.days}
				</Typography>
				<Typography
					variant="caption"
					color="text.secondary"
                    fontFamily='sansita'
				>
					Días 
				</Typography>
			</div>
			<div className="flex flex-col items-center justify-center px-12">
				<Typography
					variant="h4"
					className="mb-4"
                    fontFamily='sansita'
				>
					{countdown.hours}
				</Typography>
				<Typography
					variant="caption"
					color="text.secondary"
                    fontFamily='sansita'
				>
					Horas
				</Typography>
			</div>
			<div className="flex flex-col items-center justify-center px-12">
				<Typography
					variant="h4"
					className="mb-4"
                    fontFamily='sansita'
				>
					{countdown.minutes}
				</Typography>
				<Typography
					variant="caption"
					color="text.secondary"
                    fontFamily='sansita'
				>
					Minutos
				</Typography>
			</div>
			<div className="flex flex-col items-center justify-center px-12">
				<Typography
					variant="h4"
					className="mb-4"
                    fontFamily='sansita'
				>
					{countdown.seconds}
				</Typography>
				<Typography
					variant="caption"
					color="text.secondary"
                    fontFamily='sansita'
				>
					Segundos
				</Typography>
			</div>
		</div>
	);
}

export default FuseCountdown;
