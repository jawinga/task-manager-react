import React from 'react';
import type { Card } from '../../models/Card';
import increaseArrow from '../../assets/icons/cards/increase-icon.svg';

interface CardProps {

    card: Card;
   


}

export default function ProgressCard({card}: CardProps) {

    return(
        <div className="card card--progress">

            <div className="card__title">
                <h3>{card.title}</h3>
                <h2 className="card__value">{card.value}</h2>
            </div>
            <div className="card__percentage">
                {typeof card.percentage === 'number'
                    ? card.percentage > 0
                        ? '+'
                        : '-'
                    : null}

                {card.percentage && <span>{card.percentage}%</span>}
                {typeof card.percentage === 'number' && card.percentage > 0 && (
                    <img src={increaseArrow} alt="Increase" className="card__percentage__icon" />
                )}
                {typeof card.percentage === 'number' && card.percentage < 0 && (
                    <img src={increaseArrow} alt="Decrease" className="card__percentage__icon" style={{ transform: 'rotate(90deg)' }} />
                )}
                
            </div>
        </div>
       
    )

}

