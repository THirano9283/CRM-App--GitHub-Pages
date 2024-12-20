import styles from './ig-view1.module.css';
import createClassTransformer from '../style-utils';

export default function IgView1() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("row-layout container")}></div>
    </>
  );
}
