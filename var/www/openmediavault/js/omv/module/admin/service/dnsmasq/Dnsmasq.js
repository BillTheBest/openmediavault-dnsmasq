/**
 * @license     http://www.gnu.org/licenses/gpl.html GPL Version 3
 * @author      Ian Moore <imooreyahoo@gmail.com>
 * @author      Marcel Beck <marcel.beck@mbeck.org>
 * @author      OpenMediaVault Plugin Developers <plugins@omv-extras.org>
 * @copyright   Copyright (c) 2011 Ian Moore
 * @copyright   Copyright (c) 2012 Marcel Beck
 * @copyright   Copyright (c) 2013 OpenMediaVault Plugin Developers
 *
 * This file is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * This file is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this file. If not, see <http://www.gnu.org/licenses/>.
 *
 */
 // require("js/omv/WorkspaceManager.js")

OMV.WorkspaceManager.registerNode({
    id      : "dnsmasq",
    path    : "/service",
    text    : _("Local DNS/DHCP"),
    icon16  : "images/dnsmasq.png",
    iconSvg : "images/dnsmasq.svg"
});
