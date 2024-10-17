import IconStar from "../../assets/icon-star.svg";
import styles from "./Rater.module.css";

export type RaterProps = {
  setIsRating: React.Dispatch<React.SetStateAction<boolean>>;
  chosenValue: number;
  setChosenValue: React.Dispatch<React.SetStateAction<number>>;
};

const Rater = (props: RaterProps) => {
  const ratingValues: number[] = [1, 2, 3, 4, 5];

  const { setIsRating, chosenValue, setChosenValue } = props;

  return (
    <div>
      <div className={styles.raterStar}>
        <img src={IconStar} />
      </div>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us our offering!
      </p>
      <div className={styles.ratingContainer}>
        {ratingValues.map((rate) => (
          <div key={rate}>
            {chosenValue === rate ? (
              <div
                className={`${styles.raterStar} ${styles.chosen}`}
                onClick={() => setChosenValue(rate)}
              >
                {rate}
              </div>
            ) : (
              <div
                className={styles.raterStar}
                onClick={() => setChosenValue(rate)}
              >
                {rate}
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={() => setIsRating(false)}>Submit</button>
    </div>
  );
};

export default Rater;
