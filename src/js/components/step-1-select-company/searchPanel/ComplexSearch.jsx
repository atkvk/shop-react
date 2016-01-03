var React = require('react');
var classset = require('react-classset');

var shopActions = require('../../../actions/shopActions');
var CompanySearchStore = require('../../../stores/companySearchStore');

var ComplexSearch = React.createClass({
    render: function () {
        var classes = classset({'is-hidden': !this.props.enabled});
        return (
            <div className={classes}>
                <form action="" method="post">
                    <fieldset className="details">
                        <input type="text" id="handelsnaam" placeholder="Handelsnaam" tabIndex="4" data-minlength="2"/>
                        <input type="text" id="straatnaam" className="straatnaam" placeholder="Straatnaam" tabIndex="6"/>
                        <input type="text" id="huisnummer" className="huisnummer" placeholder="Huisnr" tabIndex="7"/>
                        <input type="text" id="postcode" className="postcode" placeholder="Postcode" tabIndex="8"/>
                        <input type="text" id="plaatsnaam" className="plaatsnaam" placeholder="Plaats" tabIndex="9"/>
                    </fieldset>
                    <p className="seperator">of</p>
                    <fieldset className="kvknummer">
                        <input type="text" id="kvknummer" placeholder="KvK-nummer" tabIndex="5" maxLength="13"/>
                    </fieldset>
                    <p className="error-message">Vul tenminste een van de bovenstaande velden in</p>
                    <div className="options">
                        <label className="zoekvervallen">
                            <input type="checkbox" id="zoekvervallen" name="zoekvervallen" tabIndex="10"/>Vervallen handelsnamen</label>
                        <label className="zoekuitgeschreven">
                            <input type="checkbox" id="zoekuitgeschreven" name="zoekuitgeschreven" checked="checked" tabIndex="11"/>
                            <abbr
                                title="Dit zijn alleen de vestigingen en rechtspersonen die na 1 januari 2012 zijn uitgeschreven">Uitgeschreven
                                vestigingen en rechtspersonen (na 1 januari 2012)</abbr>
                        </label>
                        <fieldset>
                            <label><input type="checkbox" id="hoofdvestiging" checked="checked" tabIndex="12"/>Hoofdvestigingen</label>
                            <label><input type="checkbox" id="nevenvestiging" checked="checked" tabIndex="13"/>Nevenvestigingen</label>
                            <label><input type="checkbox" id="rechtspersoon" checked="checked" tabIndex="14"/>Rechtspersonen</label>
                            <div className="error-message">Kies tenminste een van de types</div>
                        </fieldset>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = ComplexSearch;