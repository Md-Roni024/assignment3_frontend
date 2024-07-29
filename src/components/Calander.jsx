import React from 'react';
import './Calander.css';
import img2 from './2.png';

const Calendar = () => {
  return (
    <div className="calendar-wrapper">
      <h2>Select check-in date</h2>
      <p>Add your travel dates for exact pricing</p>

      <div className="calendar-container">
        {/* Month July 2024 */}
        <div className="month">
          <div className="month-header">
            <span className="arrow left">&lt;</span>
            <span className="month-name">July 2024</span>
            <span className="arrow right">&gt;</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>Su</th>
                <th>Mo</th>
                <th>Tu</th>
                <th>We</th>
                <th>Th</th>
                <th>Fr</th>
                <th>Sa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="disabled">30</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
              </tr>
              <tr>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
              </tr>
              <tr>
                <td>14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
              </tr>
              <tr>
                <td>21</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
              </tr>
              <tr>
                <td>28</td>
                <td>29</td>
                <td>30</td>
                <td>31</td>
                <td className="disabled">1</td>
                <td className="disabled">2</td>
                <td className="disabled">3</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Month August 2024 */}
        <div className="month">
          <div className="month-header">
            <span className="arrow left">&lt;</span>
            <span className="month-name">August 2024</span>
            <span className="arrow right">&gt;</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>Su</th>
                <th>Mo</th>
                <th>Tu</th>
                <th>We</th>
                <th>Th</th>
                <th>Fr</th>
                <th>Sa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="disabled">28</td>
                <td className="disabled">29</td>
                <td className="disabled">30</td>
                <td className="disabled">31</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
              </tr>
              <tr>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
              </tr>
              <tr>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
              </tr>
              <tr>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
                <td>29</td>
                <td>30</td>
                <td>31</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <a href="#" className="clear-dates">Clear dates</a>
      <hr className="divider-2" />
    </div>
  );
};

export default Calendar;
