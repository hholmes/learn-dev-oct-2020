import React from "react";
import Popup from "reactjs-popup";
import faker from "faker";
import styled from "styled-components";
import { UserActionButton } from "./UserActionButton";

const StyledPopup = styled(Popup)`
  &-overlay {
    background: rgba(0, 0, 0, 0.2);
  }
  &-content {
    background: white;
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);

    .promote {
      max-width: 24rem;
    }

    .reassign > div:first-of-type {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 2rem;
      margin-bottom: 1rem;
      overflow-x: scroll;
      min-width: 32rem;

      & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }

    h1 {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    p {
      margin-bottom: 0.5rem;
      opacity: 0.5;
    }

    input {
      float: right;
      margin-left: 1rem;
      padding: 0.4rem 0.7rem;
      &:last-of-type {
      }
      &:first-of-type {
        color: #fff;
        background: #9484f0;
      }
    }
  }
`;

export const UserControlsModal = (props: any) => (
  <StyledPopup
    trigger={
      <button>
        <UserActionButton title={props.action} />
      </button>
    }
    closeOnDocumentClick
    className={props.classNames}
  >
    {props.action === "reassign" && (
      <div className="reassign">
        <h1>Choose a new assignment:</h1>
        <div>
          {[...Array.from({ length: 3 })].map((i) => (
            <div>
              <h2>{faker.name.title()}</h2>
              <img src={faker.image.business(180, 220, true)} alt="" />
            </div>
          ))}
        </div>
        <input type="button" value="cancel" />
      </div>
    )}
    {props.action === "promote" && (
      <div className="promote">
        <h1>Offer a promotion to {props.name || "this user"}?</h1>
        <p>
          Upon cofirmation the user will be notified by an email and immediately
          granted new privileges.
        </p>
        <input type="button" value="confirm" />
        <input type="button" value="cancel" />
      </div>
    )}
  </StyledPopup>
);
