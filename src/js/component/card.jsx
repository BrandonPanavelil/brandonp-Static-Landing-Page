import React from "react";

const Card = () => {
  return (
    <div className="row mt-2 g-4">
      <div className="col-3">
        <div className="card">
          <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <div className="card-footer">
              <button className="btn btn-primary">Call to action</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card">
          <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <div className="card-footer">
              <button className="btn btn-primary">Call to action</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card">
          <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <div className="card-footer">
              <button className="btn btn-primary">Call to action</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card text-center">
          <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <div className="card-footer">
              <button className="btn btn-primary">Call to action</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
